#!/usr/bin/env python3
"""Extract URLs and API-like keys from workspace files.

Writes:
- organized_data/urls.csv  (url,file)
- organized_data/api_key  (formatted key blocks)

Skips `.css` files and binary files.
"""
import os
import re
import csv
from html.parser import HTMLParser

ROOT = os.getcwd()
OUT_DIR = os.path.join(ROOT, "organized_data")
URLS_OUT = os.path.join(OUT_DIR, "urls.csv")
API_OUT = os.path.join(OUT_DIR, "api_key")

if not os.path.isdir(OUT_DIR):
    os.makedirs(OUT_DIR, exist_ok=True)


class URLHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        for (k, v) in attrs:
            if not v:
                continue
            if k in ("href", "src", "data-src", "data-href", "srcset", "data-srcset", "content"):
                # srcset can contain multiple comma-separated urls
                if k == "srcset" or k == "data-srcset":
                    parts = [p.strip().split() for p in v.split(',')]
                    for p in parts:
                        if p:
                            self.urls.append(p[0])
                else:
                    self.urls.append(v)


def is_probably_binary(path):
    try:
        with open(path, 'rb') as f:
            chunk = f.read(8000)
            if b"\0" in chunk:
                return True
    except Exception:
        return True
    return False


URL_PATTERNS = [
    re.compile(r"https?://[^\s\"'>)]+"),
    re.compile(r"//[^\s\"'>)]+"),
    # root-relative or dot-relative paths ending with a common extension
    re.compile(r'(["\'])(/[^"\']+?\.[a-zA-Z0-9]{1,6}(?:\?[^"\']*)?)(["\'])'),
    re.compile(r'(["\'])(\.{1,2}/[^"\']+?\.[a-zA-Z0-9]{1,6}(?:\?[^"\']*)?)(["\'])'),
    # simple file paths without quotes (fallback)
    re.compile(r"\b(/[-A-Za-z0-9_./]+\.[A-Za-z0-9]{1,6})\b"),
]

# API/key heuristics
ASSIGN_KEY_RE = re.compile(r'([A-Za-z0-9_\-]{3,80}(?:API|KEY|TOKEN|SECRET)[A-Za-z0-9_\-]{0,80})\s*(?:=|:)\s*["\']([^"\']{6,200})["\']', re.I)
GENERIC_KEY_STR = re.compile(r'["\']([A-Za-z0-9\-_=]{16,200})["\']')


def extract_from_text(text, filepath):
    urls = set()
    keys = []

    # HTML parsing
    parser = URLHTMLParser()
    try:
        parser.feed(text)
        for u in parser.urls:
            urls.add(u)
    except Exception:
        pass

    # regex URL patterns
    for pat in URL_PATTERNS:
        for m in pat.finditer(text):
            # group 2 for quoted groups
            if m.groups():
                for g in m.groups():
                    if not g:
                        continue
                    if g.startswith(('"', "'")):
                        continue
                    urls.add(g)
            else:
                urls.add(m.group(0))

    # JS/assignment keys
    for m in ASSIGN_KEY_RE.finditer(text):
        name = m.group(1)
        val = m.group(2)
        # capture the full line for context
        line = text[max(0, m.start()-80): m.end()+80].split('\n')[0]
        keys.append((name, val, line.strip()))

    # generic key-like strings (avoid catching long URLs)
    for m in GENERIC_KEY_STR.finditer(text):
        candidate = m.group(1)
        if re.search(r'https?://', candidate):
            continue
        # require at least one letter or digit and not purely punctuation
        if re.search(r'[A-Za-z0-9]', candidate):
            keys.append((None, candidate, candidate))

    return urls, keys


def normalize_url(url, filedir):
    # very small normalization: strip quotes and whitespace
    u = url.strip().strip('"\'')
    return u


def main():
    found_urls = {}  # url -> set(files)
    found_keys = []  # tuples (name, value, file, context)

    for root, dirs, files in os.walk(ROOT):
        # skip hidden dirs
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for fn in files:
            if fn.endswith('.css'):
                continue
            path = os.path.join(root, fn)
            # skip output files to avoid recursion
            if os.path.abspath(path) in (os.path.abspath(URLS_OUT), os.path.abspath(API_OUT)):
                continue
            try:
                if is_probably_binary(path):
                    continue
                with open(path, 'r', encoding='utf-8', errors='replace') as f:
                    text = f.read()
            except Exception:
                continue

            urls, keys = extract_from_text(text, path)
            for u in urls:
                nu = normalize_url(u, os.path.dirname(path))
                if nu:
                    found_urls.setdefault(nu, set()).add(path)
            for name, val, ctx in keys:
                found_keys.append((name or "UNKNOWN_KEY", val, path, ctx))

    # write urls.csv
    with open(URLS_OUT, 'w', newline='', encoding='utf-8') as csvf:
        writer = csv.writer(csvf)
        writer.writerow(['url', 'file'])
        for u, files in sorted(found_urls.items()):
            for f in sorted(files):
                writer.writerow([u, f])

    # write api_key file in the requested format
    with open(API_OUT, 'w', encoding='utf-8') as outf:
        for name, val, path, ctx in found_keys:
            outf.write(f"{name}[{path}]\n")
            # try to write a line that resembles the source assignment when possible
            if ctx and ('=' in ctx or ':' in ctx):
                outf.write(ctx + "\n\n")
            else:
                outf.write(f"{val}\n\n")

    print(f"Wrote {len(found_urls)} unique urls to {URLS_OUT}")
    print(f"Wrote {len(found_keys)} potential keys to {API_OUT}")


if __name__ == '__main__':
    main()

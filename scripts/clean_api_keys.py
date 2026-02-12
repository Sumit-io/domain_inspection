#!/usr/bin/env python3
"""Remove UNKNOWN_KEY entries from organized_data/api_key file."""

import os

API_KEY_FILE = os.path.join(os.getcwd(), "organized_data", "api_key")

def clean_api_keys():
    """Remove lines matching UNKNOWN_KEY[/workspaces and following value/blank lines."""
    
    if not os.path.exists(API_KEY_FILE):
        print(f"File not found: {API_KEY_FILE}")
        return
    
    with open(API_KEY_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    cleaned = []
    i = 0
    removed_count = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line is an UNKNOWN_KEY entry from workspace
        if line.startswith("UNKNOWN_KEY[/workspaces"):
            # Skip this line, the next line (value), and the blank line after
            removed_count += 1
            i += 1
            # Skip the value line
            if i < len(lines):
                i += 1
            # Skip the blank line
            if i < len(lines) and lines[i].strip() == "":
                i += 1
        else:
            cleaned.append(line)
            i += 1
    
    # Write back to file
    with open(API_KEY_FILE, 'w', encoding='utf-8') as f:
        f.writelines(cleaned)
    
    print(f"Removed {removed_count} UNKNOWN_KEY[/workspaces entries")
    print(f"Cleaned file written to {API_KEY_FILE}")

if __name__ == '__main__':
    clean_api_keys()

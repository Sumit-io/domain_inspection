/*! For license information please see HyperServices.js.LICENSE.txt */
!(function () {
  var e = {
      4056: function (e) {
        ((version = "3.33.7"),
          (assetsBaseLocation = "https://assets.juspay.in/"),
          (beta = "beta"),
          (release = "release"),
          (environment = "production"),
          (hyperSdkWeb = "hyper/sdk/web/"),
          (bundleLocation = "hyper/bundles/web/"),
          (configPath = "/in.juspay.hyperos/2.0.0/config.js"),
          (betaConfigLocation =
            assetsBaseLocation + bundleLocation + beta + configPath),
          (releaseConfigLocation =
            assetsBaseLocation + bundleLocation + release + configPath),
          (betaManifestLocation =
            assetsBaseLocation + bundleLocation + beta + "/manifest.json"),
          (releaseManifestLocation =
            assetsBaseLocation + bundleLocation + release + "/manifest.json"),
          (betaConfigJsonLocation =
            assetsBaseLocation + hyperSdkWeb + beta + "/config.json"),
          (releaseConfigJsonLocation =
            assetsBaseLocation + hyperSdkWeb + release + "/config.json"),
          (rustServerDomainSBX = "https://sandbox.assets.juspay.in"),
          (rustServerDomainPROD = "https://payments.juspay.in"),
          (addClientId = !0),
          (e.exports = {
            baseSDKDomain: "https://public.releases.juspay.in/hyper-sdk-web/",
            version: version,
            assetsBaseLocation: assetsBaseLocation,
            environment: environment,
            betaConfigLocation: betaConfigLocation,
            releaseConfigLocation: releaseConfigLocation,
            betaManifestLocation: betaManifestLocation,
            releaseManifestLocation: releaseManifestLocation,
            betaConfigJsonLocation: betaConfigJsonLocation,
            releaseConfigJsonLocation: releaseConfigJsonLocation,
            addClientId: addClientId,
            rustServerDomainSBX: rustServerDomainSBX,
            rustServerDomainPROD: rustServerDomainPROD,
          }));
      },
      4414: function () {
        (Array.prototype.includes ||
          Object.defineProperty(Array.prototype, "includes", {
            value: function (e, t) {
              if (null == this)
                throw new TypeError('"this" is null or not defined');
              var n = Object(this),
                r = n.length >>> 0;
              if (0 === r) return !1;
              var i = 0 | t,
                a = Math.max(i >= 0 ? i : r - Math.abs(i), 0);
              function o(e, t) {
                return (
                  e === t ||
                  ("number" == typeof e &&
                    "number" == typeof t &&
                    isNaN(e) &&
                    isNaN(t))
                );
              }
              for (; a < r; ) {
                if (o(n[a], e)) return !0;
                a++;
              }
              return !1;
            },
          }),
          String.prototype.includes ||
            (String.prototype.includes = function (e, t) {
              "use strict";
              if (e instanceof RegExp)
                throw TypeError("first argument must not be a RegExp");
              return (void 0 === t && (t = 0), -1 !== this.indexOf(e, t));
            }),
          "function" != typeof Object.assign &&
            Object.defineProperty(Object, "assign", {
              value: function (e, t) {
                "use strict";
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object",
                  );
                for (var n = Object(e), r = 1; r < arguments.length; r++) {
                  var i = arguments[r];
                  if (null != i)
                    for (var a in i)
                      Object.prototype.hasOwnProperty.call(i, a) &&
                        (n[a] = i[a]);
                }
                return n;
              },
              writable: !0,
              configurable: !0,
            }),
          Uint8Array.prototype.slice ||
            (Uint8Array.prototype.slice = function (e, t) {
              var n = new Uint8Array(this);
              null == t && (t = n.length);
              for (var r = new Uint8Array(t - e), i = 0; i < r.length; i++)
                r[i] = n[i + e];
              return r;
            }));
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return (e[r](a, a.exports, n), a.exports);
  }
  !(function () {
    "use strict";
    function e() {
      var n,
        r,
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        o = i.toStringTag || "@@toStringTag";
      function s(e, i, a, o) {
        var s = i && i.prototype instanceof u ? i : u,
          l = Object.create(s.prototype);
        return (
          t(
            l,
            "_invoke",
            (function (e, t, i) {
              var a,
                o,
                s,
                u = 0,
                l = i || [],
                d = !1,
                p = {
                  p: 0,
                  n: 0,
                  v: n,
                  a: f,
                  f: f.bind(n, 4),
                  d: function (e, t) {
                    return ((a = e), (o = 0), (s = n), (p.n = t), c);
                  },
                };
              function f(e, t) {
                for (o = e, s = t, r = 0; !d && u && !i && r < l.length; r++) {
                  var i,
                    a = l[r],
                    f = p.p,
                    y = a[2];
                  e > 3
                    ? (i = y === t) &&
                      ((s = a[(o = a[4]) ? 5 : ((o = 3), 3)]),
                      (a[4] = a[5] = n))
                    : a[0] <= f &&
                      ((i = e < 2 && f < a[1])
                        ? ((o = 0), (p.v = t), (p.n = a[1]))
                        : f < y &&
                          (i = e < 3 || a[0] > t || t > y) &&
                          ((a[4] = e), (a[5] = t), (p.n = y), (o = 0)));
                }
                if (i || e > 1) return c;
                throw ((d = !0), t);
              }
              return function (i, l, y) {
                if (u > 1) throw TypeError("Generator is already running");
                for (
                  d && 1 === l && f(l, y), o = l, s = y;
                  (r = o < 2 ? n : s) || !d;
                ) {
                  a ||
                    (o
                      ? o < 3
                        ? (o > 1 && (p.n = -1), f(o, s))
                        : (p.n = s)
                      : (p.v = s));
                  try {
                    if (((u = 2), a)) {
                      if ((o || (i = "next"), (r = a[i]))) {
                        if (!(r = r.call(a, s)))
                          throw TypeError("iterator result is not an object");
                        if (!r.done) return r;
                        ((s = r.value), o < 2 && (o = 0));
                      } else
                        (1 === o && (r = a.return) && r.call(a),
                          o < 2 &&
                            ((s = TypeError(
                              "The iterator does not provide a '" +
                                i +
                                "' method",
                            )),
                            (o = 1)));
                      a = n;
                    } else if ((r = (d = p.n < 0) ? s : e.call(t, p)) !== c)
                      break;
                  } catch (e) {
                    ((a = n), (o = 1), (s = e));
                  } finally {
                    u = 1;
                  }
                }
                return { value: r, done: d };
              };
            })(e, a, o),
            !0,
          ),
          l
        );
      }
      var c = {};
      function u() {}
      function l() {}
      function d() {}
      r = Object.getPrototypeOf;
      var p = [][a]
          ? r(r([][a]()))
          : (t((r = {}), a, function () {
              return this;
            }),
            r),
        f = (d.prototype = u.prototype = Object.create(p));
      function y(e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, d)
            : ((e.__proto__ = d), t(e, o, "GeneratorFunction")),
          (e.prototype = Object.create(f)),
          e
        );
      }
      return (
        (l.prototype = d),
        t(f, "constructor", d),
        t(d, "constructor", l),
        (l.displayName = "GeneratorFunction"),
        t(d, o, "GeneratorFunction"),
        t(f),
        t(f, o, "Generator"),
        t(f, a, function () {
          return this;
        }),
        t(f, "toString", function () {
          return "[object Generator]";
        }),
        (e = function () {
          return { w: s, m: y };
        })()
      );
    }
    function t(e, n, r, i) {
      var a = Object.defineProperty;
      try {
        a({}, "", {});
      } catch (e) {
        a = 0;
      }
      ((t = function (e, n, r, i) {
        function o(n, r) {
          t(e, n, function (e) {
            return this._invoke(n, r, e);
          });
        }
        n
          ? a
            ? a(e, n, {
                value: r,
                enumerable: !i,
                configurable: !i,
                writable: !i,
              })
            : (e[n] = r)
          : (o("next", 0), o("throw", 1), o("return", 2));
      }),
        t(e, n, r, i));
    }
    function r(e, t, n, r, i, a, o) {
      try {
        var s = e[a](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    var i = n(4056),
      a = {
        alg: "A128CBC",
        ext: !0,
        k: "9qvGlV0DZVpVEnynWJ6kew",
        key_ops: ["encrypt", "decrypt"],
        kty: "oct",
      },
      o = window.crypto
        ? window.crypto.subtle || window.crypto.webkitSubtle
        : window.msCrypto.subtle;
    function s(e) {
      var t = (window.crypto ? window.crypto : window.msCrypto).getRandomValues(
        new Uint8Array(16),
      );
      return o
        .importKey(
          "jwk",
          window.crypto.webkitSubtle
            ? new TextEncoder().encode(JSON.stringify(a))
            : a,
          { name: "AES-CBC" },
          !0,
          ["encrypt", "decrypt"],
        )
        .then(function (n) {
          return o.encrypt(
            { name: "AES-CBC", iv: t },
            n,
            new TextEncoder().encode(e),
          );
        })
        .then(function (e) {
          var n = p(t.buffer) + p(e);
          return d(n);
        });
    }
    function c(e) {
      try {
        var t;
        if (e && e.payload) {
          if (e.payload.merchantId) return e.payload.merchantId;
          "string" == typeof e.payload.signaturePayload
            ? (t = JSON.parse(e.payload.signaturePayload))
            : "string" == typeof e.payload.orderDetails &&
              (t = JSON.parse(e.payload.orderDetails));
        }
        if (t && t.merchant_id) return t.merchant_id;
      } catch (e) {}
    }
    function u(e, t, n) {
      var r,
        a =
          (window.hyperSDKVersion && "" != window.hyperSDKVersion
            ? window.hyperSDKVersion
            : "3.33.7") + "/",
        o =
          null == e ||
          null === (r = e.payload) ||
          void 0 === r ||
          null === (r = r.region) ||
          void 0 === r
            ? void 0
            : r.toLowerCase(),
        s = i.baseSDKDomain;
      return window.tenantInfo && window.tenantInfo.assetsDomain
        ? window.tenantInfo.assetsDomain + "/payment-page/"
        : (o &&
            "development" !== i.environment &&
            (s = (function (e, t) {
              var n = { eu: "io" };
              if (null == t || !n[t]) return e;
              var r = new URL(e),
                i = r.origin.split(".");
              return ((i[i.length - 1] = n[t]), i.join(".") + r.pathname);
            })(i.baseSDKDomain, o)),
          "production" !== i.environment && "development" !== i.environment
            ? s
            : s + ("production" !== i.environment ? "hyper-sdk-web/" : "") + a);
    }
    function l() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          var t = (16 * Math.random()) | 0;
          return ("x" == e ? t : (3 & t) | 8).toString(16);
        },
      );
    }
    var d = function (e) {
        return btoa(e)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
      },
      p = function (e) {
        e = (function (e) {
          return e instanceof Array || e instanceof Uint8Array
            ? e
            : e instanceof ArrayBuffer
              ? new Uint8Array(e)
              : void 0;
        })(e);
        for (var t = "", n = 0; n < e.length; n++)
          t += String.fromCharCode(e[n]);
        return t;
      };
    function f(e, t, n) {
      var r,
        i =
          (null == e || null === (r = e.payload) || void 0 === r
            ? void 0
            : r.clientId) || "common",
        a = "clientId=" + encodeURIComponent(i);
      if (!n) {
        var o =
          e &&
          e.payload &&
          e.payload.integrationType &&
          "iframe" == e.payload.integrationType.toLowerCase()
            ? "iframe"
            : "redirection";
        a += "&integType=" + encodeURIComponent(o);
      }
      return t + (t.split("?")[1] ? "&" : "?") + a;
    }
    function y(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return ((t = e().m(function t(n, r, i) {
        var a, o;
        return e().w(function (e) {
          for (;;)
            switch (e.n) {
              case 0:
                if (i) {
                  e.n = 2;
                  break;
                }
                return (
                  (a = { initPayload: r }),
                  (e.n = 1),
                  s(JSON.stringify(a))
                );
              case 1:
                ((o = e.v),
                  (o = encodeURIComponent(o)),
                  (n += (n.split("?")[1] ? "&" : "?") + "e=" + o));
              case 2:
                return e.a(2, n);
            }
        }, t);
      })),
      (h = function () {
        var e = this,
          n = arguments;
        return new Promise(function (i, a) {
          var o = t.apply(e, n);
          function s(e) {
            r(o, i, a, s, c, "next", e);
          }
          function c(e) {
            r(o, i, a, s, c, "throw", e);
          }
          s(void 0);
        });
      })).apply(this, arguments);
      var t;
    }
    function v() {
      return !0;
    }
    function m() {
      var e,
        t,
        n = "function" == typeof Symbol ? Symbol : {},
        r = n.iterator || "@@iterator",
        i = n.toStringTag || "@@toStringTag";
      function a(n, r, i, a) {
        var c = r && r.prototype instanceof s ? r : s,
          u = Object.create(c.prototype);
        return (
          g(
            u,
            "_invoke",
            (function (n, r, i) {
              var a,
                s,
                c,
                u = 0,
                l = i || [],
                d = !1,
                p = {
                  p: 0,
                  n: 0,
                  v: e,
                  a: f,
                  f: f.bind(e, 4),
                  d: function (t, n) {
                    return ((a = t), (s = 0), (c = e), (p.n = n), o);
                  },
                };
              function f(n, r) {
                for (s = n, c = r, t = 0; !d && u && !i && t < l.length; t++) {
                  var i,
                    a = l[t],
                    f = p.p,
                    y = a[2];
                  n > 3
                    ? (i = y === r) &&
                      ((c = a[(s = a[4]) ? 5 : ((s = 3), 3)]),
                      (a[4] = a[5] = e))
                    : a[0] <= f &&
                      ((i = n < 2 && f < a[1])
                        ? ((s = 0), (p.v = r), (p.n = a[1]))
                        : f < y &&
                          (i = n < 3 || a[0] > r || r > y) &&
                          ((a[4] = n), (a[5] = r), (p.n = y), (s = 0)));
                }
                if (i || n > 1) return o;
                throw ((d = !0), r);
              }
              return function (i, l, y) {
                if (u > 1) throw TypeError("Generator is already running");
                for (
                  d && 1 === l && f(l, y), s = l, c = y;
                  (t = s < 2 ? e : c) || !d;
                ) {
                  a ||
                    (s
                      ? s < 3
                        ? (s > 1 && (p.n = -1), f(s, c))
                        : (p.n = c)
                      : (p.v = c));
                  try {
                    if (((u = 2), a)) {
                      if ((s || (i = "next"), (t = a[i]))) {
                        if (!(t = t.call(a, c)))
                          throw TypeError("iterator result is not an object");
                        if (!t.done) return t;
                        ((c = t.value), s < 2 && (s = 0));
                      } else
                        (1 === s && (t = a.return) && t.call(a),
                          s < 2 &&
                            ((c = TypeError(
                              "The iterator does not provide a '" +
                                i +
                                "' method",
                            )),
                            (s = 1)));
                      a = e;
                    } else if ((t = (d = p.n < 0) ? c : n.call(r, p)) !== o)
                      break;
                  } catch (t) {
                    ((a = e), (s = 1), (c = t));
                  } finally {
                    u = 1;
                  }
                }
                return { value: t, done: d };
              };
            })(n, i, a),
            !0,
          ),
          u
        );
      }
      var o = {};
      function s() {}
      function c() {}
      function u() {}
      t = Object.getPrototypeOf;
      var l = [][r]
          ? t(t([][r]()))
          : (g((t = {}), r, function () {
              return this;
            }),
            t),
        d = (u.prototype = s.prototype = Object.create(l));
      function p(e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, u)
            : ((e.__proto__ = u), g(e, i, "GeneratorFunction")),
          (e.prototype = Object.create(d)),
          e
        );
      }
      return (
        (c.prototype = u),
        g(d, "constructor", u),
        g(u, "constructor", c),
        (c.displayName = "GeneratorFunction"),
        g(u, i, "GeneratorFunction"),
        g(d),
        g(d, i, "Generator"),
        g(d, r, function () {
          return this;
        }),
        g(d, "toString", function () {
          return "[object Generator]";
        }),
        (m = function () {
          return { w: a, m: p };
        })()
      );
    }
    function g(e, t, n, r) {
      var i = Object.defineProperty;
      try {
        i({}, "", {});
      } catch (e) {
        i = 0;
      }
      ((g = function (e, t, n, r) {
        function a(t, n) {
          g(e, t, function (e) {
            return this._invoke(t, n, e);
          });
        }
        t
          ? i
            ? i(e, t, {
                value: n,
                enumerable: !r,
                configurable: !r,
                writable: !r,
              })
            : (e[t] = n)
          : (a("next", 0), a("throw", 1), a("return", 2));
      }),
        g(e, t, n, r));
    }
    function w(e, t, n, r, i, a, o) {
      try {
        var s = e[a](o),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, i);
    }
    var b = n(4056),
      S = b.rustServerDomainSBX,
      P = b.rustServerDomainPROD;
    function I(e) {
      var t = void 0;
      try {
        var n,
          r,
          i =
            null == e || null === (n = e.payload) || void 0 === n
              ? void 0
              : n.validatePlatform;
        "string" != typeof i ||
          ("android" != i && "ios" != i) ||
          "string" !=
            typeof (null == e || null === (r = e.payload) || void 0 === r
              ? void 0
              : r.clientId) ||
          (t = { platform: i, clientId: e.payload.clientId });
      } finally {
        return t;
      }
    }
    function D(e, t, n, r) {
      var i = document.createElement("iframe"),
        a = "payment *; clipboard-write;";
      return (
        r && "string" == typeof r && r.length > 0 && (a += r),
        (i.src = e + "#" + n),
        (i.name = t),
        (i.height = "100%"),
        (i.width = "100%"),
        (i.allow = a),
        (i.style.border = "none"),
        (i.style.visibility = "hidden"),
        i
      );
    }
    function O(e, t, n, r, i) {
      return x.apply(this, arguments);
    }
    function x() {
      var e;
      return (
        (e = m().m(function e(t, n, r, i, a) {
          var o, s, c, l, d, p, h;
          return m().w(function (e) {
            for (;;)
              switch (e.n) {
                case 0:
                  if (
                    ((o =
                      i &&
                      i.payload &&
                      i.payload.environment &&
                      "sandbox" == i.payload.environment),
                    (s = i.studioUrlOrigin
                      ? i.studioUrlOrigin
                      : window.tenantInfo && window.tenantInfo.assetsDomain
                        ? window.tenantInfo.assetsDomain
                        : o
                          ? S
                          : P),
                    !v())
                  ) {
                    e.n = 1;
                    break;
                  }
                  ((s =
                    s +
                    "/payment-page/client/" +
                    ((null == i || null === (c = i.payload) || void 0 === c
                      ? void 0
                      : c.clientId) || "common") +
                    ("configurator" ==
                    (null == i || null === (l = i.payload) || void 0 === l
                      ? void 0
                      : l.setup)
                      ? "?configurator=true"
                      : "")),
                    (e.n = 3));
                  break;
                case 1:
                  return (
                    I(i),
                    (d = u(i)),
                    (p = f(i, d + "hyper.html", t)),
                    (e.n = 2),
                    y(p, i, t)
                  );
                case 2:
                  s = e.v;
                case 3:
                  if (
                    ((h = D(
                      s,
                      t ? "HyperService-PreFetch" : "HyperServices",
                      r,
                      i.payload.iframePermissions,
                    )),
                    t && (h.style.display = "none"),
                    (n = void 0 === n || n),
                    t || n)
                  ) {
                    e.n = 4;
                    break;
                  }
                  return (a(h), e.a(2));
                case 4:
                  return (
                    "complete" === document.readyState
                      ? document.body.appendChild(h)
                      : window.addEventListener("load", function () {
                          document.body.appendChild(h);
                        }),
                    a(h),
                    e.a(2)
                  );
              }
          }, e);
        })),
        (x = function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = e.apply(t, n);
            function o(e) {
              w(a, r, i, o, s, "next", e);
            }
            function s(e) {
              w(a, r, i, o, s, "throw", e);
            }
            o(void 0);
          });
        }),
        x.apply(this, arguments)
      );
    }
    function k(e, t) {
      if (!e || !e.contentWindow) throw "hyper iframe not defined";
      e.contentWindow.postMessage(JSON.stringify(t), "*");
    }
    function j(e, t, n, r, i) {
      if (e > 10)
        O(!1, !0, r, i, function (e) {
          n(e);
        });
      else {
        var a = document.getElementById(t);
        a
          ? O(!1, !1, r, i, function (e) {
              (a.appendChild(e), n(e));
            })
          : setTimeout(function () {
              j(e + 1, t, n, r, i);
            }, 500);
      }
    }
    function C(e, t, n, r) {
      if ("string" != typeof e) throw "please pass valid merchant view Id";
      j(0, e, t, n, r);
    }
    function H(e) {
      return (
        (H =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        H(e)
      );
    }
    function L(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        ((r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, E(r.key), r));
      }
    }
    function E(e) {
      var t = (function (e) {
        if ("object" != H(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != H(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      })(e);
      return "symbol" == H(t) ? t : t + "";
    }
    n(4414);
    var T = n(4056),
      B = T.rustServerDomainSBX,
      V = T.rustServerDomainPROD,
      A = (function () {
        return (
          (e = function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "in";
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.fragmentViewGroups = {}),
              (this.isIframeIntegration = !1),
              (this.initiateTriggered = !1),
              (this.pendingHyperCalls = []),
              (this.isHyperReady = !1),
              (this.consumeBackpress = !1),
              (this.hyperSDKDiv = null),
              (this.hyperSDKDivElem = null),
              (this.terminateTriggered = !1),
              (this.region = t),
              (this.toRemoveServicePrefix = !1));
          }),
          (t = [
            {
              key: "addNewFragmentViewGroup",
              value: function (e, t) {
                var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  i =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                this.fragmentViewGroups[t] = {
                  iframe: e,
                  isReady: n,
                  queue: [],
                  div: r,
                  height: r.style.height,
                  isVisible: i,
                };
              },
            },
            {
              key: "addinjuspayifmissing",
              value: function (e) {
                return (
                  (this.toRemoveServicePrefix = 0 != e.indexOf("in.juspay.")),
                  0 == e.indexOf("in.juspay.") ? e : "in.juspay." + e
                );
              },
            },
            {
              key: "removeinjuspayifpresent",
              value: function (e) {
                return this.toRemoveServicePrefix
                  ? e.replace("in.juspay.", "")
                  : e;
              },
            },
            {
              key: "initiate",
              value: function (e, t) {
                var n = this;
                try {
                  if (this.initiateTriggered) throw "Already initiated";
                  if (
                    (this.attachEventListener(),
                    (this.initiateTriggered = !0),
                    (this.initiatePayload = Object.assign({}, e)),
                    (this.initiatePayload.service = this.addinjuspayifmissing(
                      this.initiatePayload.service,
                    )),
                    (this.initiatePayload.tenantInfo = window.tenantInfo || {}),
                    (this.initiatePayload.isHyperWebViewBridgeIOS =
                      void 0 !== window.HyperWebViewBridgeIOS),
                    (this.hyperCallbackHandler = t),
                    (this.isIframeIntegration =
                      "iframe" == e.payload.integrationType.toLowerCase()),
                    (this.iframeHash = l()),
                    this.isIframeIntegration)
                  ) {
                    var r = function () {
                        var e = {
                          name: "initiate",
                          payload: JSON.stringify(n.initiatePayload),
                        };
                        k(n.hyperIframe, e);
                      },
                      i = (function () {
                        var t = function (e) {
                          return "string" == typeof e;
                        };
                        if (t(e.payload.hyperSDKDiv))
                          return e.payload.hyperSDKDiv;
                        if (t(e.payload.hypersdkDiv))
                          return e.payload.hypersdkDiv;
                        if (t(e.payload.hypersdkdiv))
                          return e.payload.hypersdkdiv;
                        if (t(e.payload.entryPointId))
                          return e.payload.entryPointId;
                        throw "Cannot find hyperSDKDiv id from initiate payload";
                      })();
                    try {
                      ((this.hyperSDKDiv = i),
                        (this.hyperSDKDivElem = document.getElementById(
                          this.hyperSDKDiv,
                        )));
                    } catch (e) {
                      console.error(e);
                    }
                    (C(
                      i,
                      function (e) {
                        ((n.hyperIframe = e),
                          n.addNewFragmentViewGroup(
                            n.hyperIframe,
                            "default",
                            !0,
                            n.hyperSDKDivElem,
                          ),
                          n.terminateTriggered &&
                            n.hyperIframe &&
                            (n.hyperIframe.remove(),
                            (n.terminateTriggered = !1)));
                      },
                      this.iframeHash,
                      this.initiatePayload,
                    ),
                      this.isHyperReady ? r() : this.pendingHyperCalls.push(r));
                  }
                } catch (e) {
                  console.error("HyperSDK - Error in initiate : ", e);
                }
              },
            },
            {
              key: "calculateSafePadding",
              value: function () {
                try {
                  if (
                    this.hyperSDKDivElem &&
                    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                    !window.MSStream
                  ) {
                    var e = this.hyperSDKDivElem.offsetTop;
                    return (
                      this.hyperSDKDivElem.offsetHeight -
                      (window.innerHeight - e) +
                      50
                    );
                  }
                } catch (e) {
                  console.error("Error occured while getting safe padding", e);
                }
                return 0;
              },
            },
            {
              key: "process",
              value: function (e) {
                var t = this,
                  n = Object.assign({}, e);
                n.service = this.addinjuspayifmissing(n.service);
                try {
                  var r, i;
                  if (n.payload && n.payload.fragmentViewGroups) {
                    var a = n.payload.fragmentViewGroups;
                    for (var o in a) {
                      var d = a[o];
                      if (d) {
                        var p = l();
                        a[o] = p;
                        var y = D(u() + "fragment.html", o, a[o], "");
                        (d.appendChild(y),
                          this.addNewFragmentViewGroup(y, a[o], !1, d, !1));
                      }
                    }
                  }
                  var h = !1,
                    v = c(n) || c(this.initiatePayload),
                    m =
                      (null == n || null === (r = n.payload) || void 0 === r
                        ? void 0
                        : r.clientId) ||
                      (null === (i = this.initiatePayload) ||
                      void 0 === i ||
                      null === (i = i.payload) ||
                      void 0 === i
                        ? void 0
                        : i.clientId);
                  if (
                    ((v || m) && (h = !0),
                    !this.isIframeIntegration &&
                      this.initiatePayload &&
                      this.initiatePayload.payload &&
                      !this.initiatePayload.payload.integrationType &&
                      (this.initiatePayload.payload.integrationType =
                        "redirection"),
                    !this.initiateTriggered)
                  )
                    throw "Call initiate before process";
                  if (this.isIframeIntegration) {
                    var g = function () {
                      try {
                        var e = t.calculateSafePadding();
                        n.safeIframeBottomPadding = e;
                      } catch (e) {}
                      var r,
                        i = { name: "process", payload: JSON.stringify(n) };
                      ((r = t.hyperIframe) && (r.style.visibility = "visible"),
                        k(t.hyperIframe, i));
                    };
                    this.isHyperReady ? g() : this.pendingHyperCalls.push(g);
                  } else if (h) {
                    var w = (function () {
                        try {
                          var e = new Uint8Array(16),
                            t = Date.now(),
                            n = new DataView(new ArrayBuffer(8));
                          return (
                            n.setBigUint64(0, BigInt(t)),
                            e.set(new Uint8Array(n.buffer).slice(2, 8), 0),
                            (function (e) {
                              for (var t = 0; t < e.length; t++)
                                e[t] = Math.floor(256 * Math.random());
                            })(e.subarray(12)),
                            (function (e) {
                              for (
                                var t = "0123456789abcdef", n = "", r = 0;
                                r < e.length;
                                r++
                              )
                                ((n += t[e[r] >> 4]), (n += t[15 & e[r]]));
                              return n;
                            })(e)
                          );
                        } catch (e) {
                          return l();
                        }
                      })(),
                      b = V;
                    try {
                      var S,
                        P,
                        I =
                          (null == n || null === (S = n.payload) || void 0 === S
                            ? void 0
                            : S.orderDetails) ||
                          (null == n || null === (P = n.payload) || void 0 === P
                            ? void 0
                            : P.order_details),
                        O = (I = JSON.parse(I)).merchantId || I.merchant_id;
                      w = "".concat(O, "-").concat(w);
                    } catch (e) {
                      console.error(
                        "failed to get merchant id from order details",
                        e,
                      );
                    }
                    ("sandbox" ===
                      (this.initiatePayload &&
                      this.initiatePayload.payload &&
                      this.initiatePayload.payload.environment
                        ? this.initiatePayload.payload.environment
                        : "production") && (b = B),
                      (b =
                        window.tenantInfo && window.tenantInfo.assetsDomain
                          ? window.tenantInfo.assetsDomain
                          : b),
                      (b += "/payment-page/signature/".concat(w)));
                    var x = document.getElementsByTagName("body")[0],
                      j = document.createElement("form");
                    (j.setAttribute("method", "post"),
                      j.setAttribute("action", b));
                    var C = document.createElement("input");
                    (C.setAttribute("type", "hidden"),
                      C.setAttribute("name", "id"),
                      C.setAttribute("value", w));
                    var L = document.createElement("input");
                    (L.setAttribute("type", "hidden"),
                      L.setAttribute("name", "payload"),
                      L.setAttribute(
                        "value",
                        JSON.stringify({
                          initPayload: this.initiatePayload,
                          processPayload: n,
                        }),
                      ),
                      j.appendChild(C),
                      j.appendChild(L),
                      x.appendChild(j),
                      j.submit());
                  } else {
                    if ("object" != H(this.initiatePayload) || "object" != H(n))
                      throw "parameters missing";
                    !(function (e, t) {
                      !(function (e, t, n) {
                        var r,
                          i,
                          a = { initPayload: e, processPayload: t },
                          o = encodeURIComponent(!0 === e.betaAssets);
                        try {
                          s(JSON.stringify(a)).then(function (t) {
                            r = encodeURIComponent(t);
                            var a = u(e);
                            ((i = f(
                              e,
                              (i = a + "hyper.html?e=" + r + "&beta=" + o),
                              !1,
                            )),
                              n(i));
                          });
                        } catch (r) {
                          var c = encodeURIComponent(JSON.stringify(e)),
                            l = encodeURIComponent(JSON.stringify(t)),
                            d = u(e);
                          ((d = f(
                            e,
                            (d =
                              d +
                              "hyper.html?initPayload=" +
                              c +
                              "&processPayload=" +
                              l +
                              "&beta=" +
                              o),
                            !1,
                          )),
                            n(d));
                        }
                      })(e, t, function (e) {
                        window.parent.location.href = e;
                      });
                    })(this.initiatePayload, n);
                  }
                } catch (e) {
                  console.error("HyperSDK - Error in process : ", e);
                }
              },
            },
            {
              key: "terminate",
              value: function () {
                (window.removeEventListener(
                  "message",
                  this.hyperCallbackWrapper,
                ),
                  (this.initiateTriggered = !1),
                  (this.isHyperReady = !1),
                  this.hyperIframe
                    ? this.hyperIframe.remove()
                    : (this.terminateTriggered = !0));
              },
            },
            {
              key: "attachEventListener",
              value: function () {
                var e = this;
                ((this.hyperCallbackWrapper = function (t) {
                  try {
                    var n =
                      "string" == typeof t.data ? JSON.parse(t.data) : t.data;
                    if (
                      "openApp" === n.fname &&
                      null != window.HyperWebViewBridgeIOS
                    )
                      return void window.HyperWebViewBridgeIOS.openApp(
                        btoa(n.args),
                        n.cb,
                      );
                    if (
                      "forwardPort" == n.event &&
                      e.fragmentViewGroups[n.fragmentHash]
                    )
                      return void e.hyperIframe.contentWindow.postMessage(
                        {
                          name: "initFragment",
                          fragmentId: n.fragmentHash,
                          port: t.ports[0],
                        },
                        "*",
                        [t.ports[0]],
                      );
                    if (
                      "hideFragment" == n.event &&
                      e.fragmentViewGroups[n.fragmentHash]
                    ) {
                      if (!e.fragmentViewGroups[n.fragmentHash].isVisible)
                        return;
                      var r = e.fragmentViewGroups[n.fragmentHash];
                      return (
                        (r.height = r.div.style.height),
                        (r.iframe.style.visibility = "hidden"),
                        (r.div.style.height = "0px"),
                        (r.iframe.height = "0px"),
                        void (e.fragmentViewGroups[n.fragmentHash].isVisible =
                          !1)
                      );
                    }
                    if (
                      "showFragment" == n.event &&
                      e.fragmentViewGroups[n.fragmentHash]
                    ) {
                      if (e.fragmentViewGroups[n.fragmentHash].isVisible)
                        return;
                      var i = e.fragmentViewGroups[n.fragmentHash];
                      return (
                        (i.iframe.style.visibility = "visible"),
                        (i.iframe.height = "100%"),
                        (i.div.style.display = null),
                        (i.div.style.height = i.height),
                        void (e.fragmentViewGroups[n.fragmentHash].isVisible =
                          !0)
                      );
                    }
                    if (
                      n.fragmentHash &&
                      !Object.keys(e.fragmentViewGroups).includes(
                        n.fragmentHash,
                      )
                    )
                      return;
                    if (!n.fragmentHash && n.iframeHash !== "#" + e.iframeHash)
                      return;
                    if ("heightUpdate" == n.event) {
                      var a = e.fragmentViewGroups[n.namespace];
                      return void (
                        n.namespace &&
                        a &&
                        a.iframe &&
                        (a.iframe.height = "".concat(n.height, "px"))
                      );
                    }
                    if ("onJOSReady" === n.event)
                      return (
                        (e.isHyperReady = !0),
                        void (e.pendingHyperCalls = e.pendingHyperCalls.filter(
                          function (e) {
                            return (e(), !1);
                          },
                        ))
                      );
                    if ("jp_consuming_backpress" === n.event)
                      return void (e.consumeBackpress =
                        n.payload.jp_consuming_backpress);
                    if ("triggerFn" === n.event)
                      return (function (e) {
                        if (window.HyperAgent) e();
                        else {
                          var t = u() + "HyperAgent.js",
                            n = document.createElement("script");
                          (n.setAttribute("src", t),
                            document.head.appendChild(n),
                            (n.onload = function () {
                              try {
                                e();
                              } catch (e) {
                                console.error(
                                  "HyperSDK - Error in Loading HyperAgent : ",
                                  e,
                                );
                              }
                            }));
                        }
                      })(function () {
                        try {
                          HyperAgent.triggerFnMatches(
                            n,
                            function (t) {
                              return k(e.hyperIframe, t);
                            },
                            !1,
                          );
                        } catch (e) {}
                      });
                    (delete n.iframeHash,
                      "function" == typeof e.hyperCallbackHandler &&
                        ((n.service = e.removeinjuspayifpresent(n.service)),
                        e.hyperCallbackHandler(n)));
                  } catch (e) {}
                }),
                  window.addEventListener(
                    "message",
                    this.hyperCallbackWrapper,
                  ));
              },
            },
            {
              key: "handleBackpress",
              value: function () {
                return (
                  this.isHyperReady &&
                    this.consumeBackpress &&
                    k(this.hyperIframe, { name: "backpress" }),
                  !this.consumeBackpress
                );
              },
            },
            {
              key: "updatePadding",
              value: function () {
                if (this.isHyperReady && this.hyperIframe) {
                  var e = {
                    name: "updatePadding",
                    padding: this.calculateSafePadding(),
                  };
                  k(this.hyperIframe, e);
                }
              },
            },
            {
              key: "onBackpress",
              value: function () {
                return (
                  this.isHyperReady &&
                    this.consumeBackpress &&
                    k(this.hyperIframe, { name: "backpress" }),
                  this.consumeBackpress
                );
              },
            },
            {
              key: "isInitialised",
              value: function () {
                return this.initiateTriggered;
              },
            },
          ]),
          (n = [
            {
              key: "preFetch",
              value: function (e) {
                var t = [];
                e.pre_fetch = "true";
                var n,
                  r = { name: "startPreFetch", payload: JSON.stringify(e) },
                  i = l(),
                  a = !1,
                  o = function (e) {
                    try {
                      var n =
                        "string" == typeof e.data ? JSON.parse(e.data) : null;
                      null !== n &&
                        n.iframeHash === "#" + i &&
                        "onJOSReady" === n.event &&
                        ((a = !0),
                        (t = t.filter(function (e) {
                          return (e(), !1);
                        })));
                    } catch (e) {}
                  };
                window.addEventListener("message", o);
                var s = function () {
                  (k(n, r), window.removeEventListener("message", o));
                };
                (O(!0, !0, i, e, function (e) {
                  n = e;
                }),
                  a ? s() : t.push(s));
              },
            },
          ]),
          t && L(e.prototype, t),
          n && L(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
        var e, t, n;
      })();
    ((window.HyperServices = A), (window.hyperSDKVersion = ""));
  })();
})();

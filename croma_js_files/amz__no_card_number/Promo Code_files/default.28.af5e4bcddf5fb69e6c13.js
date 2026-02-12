(window.__LOADABLE_LOADED_CHUNKS__ =
  window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [28],
  {
    471: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        l = t(12),
        c = t(13),
        s = t(75),
        o = t.n(s),
        i = t(17),
        m = t(259),
        d = t(59),
        u = t(83),
        g = t(2),
        b = t.n(g),
        f = t(14),
        p = t(88),
        E = t.n(p),
        h = t(21),
        v = t(26),
        y = t(16),
        x = t(72),
        w = t.n(x),
        N = t(15),
        C = t(1),
        j = t.n(C),
        _ = (t(472), t(261), t(262), t(49));
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var n in t)
                  ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function S(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var t =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var n,
                r,
                l,
                c,
                s = [],
                o = !0,
                i = !1;
              try {
                if (((l = (t = t.call(e)).next), 0 === a)) {
                  if (Object(t) !== t) return;
                  o = !1;
                } else
                  for (
                    ;
                    !(o = (n = l.call(t)).done) &&
                    (s.push(n.value), s.length !== a);
                    o = !0
                  );
              } catch (e) {
                ((i = !0), (r = e));
              } finally {
                try {
                  if (
                    !o &&
                    null != t.return &&
                    ((c = t.return()), Object(c) !== c)
                  )
                    return;
                } finally {
                  if (i) throw r;
                }
              }
              return s;
            }
          })(e, a) ||
          (function (e, a) {
            if (e) {
              if ("string" == typeof e) return O(e, a);
              var t = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? O(e, a)
                    : void 0
              );
            }
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function O(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var t = 0, n = Array(a); t < a; t++) n[t] = e[t];
        return n;
      }
      var D = new v.a(),
        L = new y.a(),
        k = !1,
        F = {
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: !0,
          autoplay: !0,
          arrows: !1,
          autoplaySpeed: 3e3,
          dots: !0,
          speed: 2e3,
          centerMode: !0,
          centerPadding: "100px",
          lazyLoad: !0,
          afterChange: function () {
            Object(h.b)();
          },
          responsive: [
            { breakpoint: 768, settings: { centerMode: !1, arrows: !1 } },
          ],
        };
      a.default = Object(l.c)()(function (e) {
        var a = e.t,
          t = S(Object(n.useState)(""), 2),
          l = t[0],
          s = t[1],
          g = S(Object(n.useState)(""), 2),
          p = g[0],
          v = g[1],
          y = S(Object(n.useState)(!1), 2),
          x = y[0],
          C = y[1],
          O = S(Object(n.useState)(!1), 2),
          B = O[0],
          M = O[1],
          I = Object(_.b)(),
          P = I.executeCaptchaProtectedRequest,
          T = I.validateAndDisplayFallbackCaptchaError,
          z = I.renderV2FallbackCaptcha,
          H = S(
            Object(n.useState)({
              cardNumber: "",
              cardPin: "",
              balanceError: "",
              balance: { data: {}, message: "" },
              balanceApplied: !1,
              balanceLoading: !1,
              resetBalance: !1,
            }),
            2,
          ),
          R = H[0],
          U = H[1];
        Object(n.useEffect)(function () {
          return (
            (k = !0),
            Object(h.b)(),
            D.hideMessages(),
            e.isClient &&
              (document.title = a(e.settings.store_configuration.ewgc.label)),
            C(!x),
            function () {
              k = !1;
            }
          );
        }, []);
        var V,
          Y,
          q,
          G,
          K,
          W,
          Q,
          $,
          J = function (e) {
            var a = e.target.value;
            (s(a.toUpperCase()), v(ae(a.toUpperCase())));
          },
          X = function (e) {
            e && 13 === e.charCode && (Z(l), te());
          },
          Z = function (e) {
            e && s("-" === e[4] && "-" === e[11] ? e : ee(e));
          },
          ee = function (e) {
            return (
              (e = (e = ae(e)).split("")).splice(4, 0, "-"),
              e.splice(11, 0, "-"),
              e.join("")
            );
          },
          ae = function (e) {
            return e.replace(/-/g, "");
          },
          te = function () {
            if (!D.allValid()) return (D.showMessages(), void C(!x));
            if (!T()) {
              U({
                balanceLoading: !0,
                resetBalance: !0,
                balanceError: "",
                balance: { data: {}, message: "" },
              });
              var a = { cardNumber: "ewgc" };
              ((a.pin = p),
                P(L.getBalance, {
                  postData: a,
                  action: b.a.captcha.action.EWGC,
                })
                  .then(function (e) {
                    k &&
                      (U({
                        resetBalance: !1,
                        balanceLoading: !1,
                        balanceApplied: !0,
                        balance: {
                          data: e || "",
                          message: e.message ? e.message : "",
                        },
                      }),
                      M(!0));
                  })
                  .catch(function (a) {
                    if (k) {
                      var t =
                        a.additionalTxnFields &&
                        a.additionalTxnFields.responseMessage
                          ? a.additionalTxnFields.responseMessage
                          : a.message;
                      (e.errorHandlingForApis(a),
                        U({
                          balanceLoading: !1,
                          captchaResponse: "",
                          resetBalance: !1,
                          balanceError: t,
                        }));
                    }
                  }));
            }
          },
          ne = function () {
            return r.a.createElement(
              "div",
              { className: "my-3" },
              (function (e) {
                var a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "danger";
                return r.a.createElement(
                  "div",
                  {
                    className: "alert mb-0 fw-bold p-2 d-flex ".concat(
                      "success" === a
                        ? "text-success alert-success"
                        : "text-danger alert-danger",
                    ),
                    role: "alert",
                  },
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        fill: "currentColor",
                        className: "bi bi-exclamation-circle",
                        viewBox: "0 0 16 16",
                      },
                      r.a.createElement("path", {
                        d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z",
                      }),
                      r.a.createElement("path", {
                        d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z",
                      }),
                    ),
                  ),
                  " ",
                  r.a.createElement("div", { className: "my-auto" }, e),
                );
              })(a(R.balanceError)),
              document
                .getElementById("balance-error")
                .scrollIntoView({ behavior: "smooth" }),
            );
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          e.settings.store_configuration.ewgc.status
            ? r.a.createElement(
                r.a.Fragment,
                null,
                (function () {
                  var a;
                  if (((a = e.settings.banners.ewgc), !j.a.isEmpty(a))) {
                    var t = a.map(function (e, a) {
                      return r.a.createElement(
                        "div",
                        { key: a, className: "px-2" },
                        r.a.createElement(
                          f.a,
                          { to: e.href },
                          r.a.createElement("img", {
                            src: o.a,
                            "data-src": e.imageurl,
                            alt: e.alt,
                            className: "rounded img-fluid",
                          }),
                        ),
                      );
                    });
                    return r.a.createElement(
                      m.a,
                      { className: "headerBanner" },
                      r.a.createElement(
                        d.a,
                        { xs: "12", className: "bg-light pt-4 pb-4 pb-lg-5" },
                        r.a.createElement(E.a, A({ className: "row" }, F), t),
                      ),
                    );
                  }
                })(),
                r.a.createElement(
                  m.a,
                  {
                    id: "balance-error",
                    className: "justify-content-center m-xs-3 m-lg-0  bg-white",
                  },
                  r.a.createElement(
                    d.a,
                    {
                      xs: "12",
                      md: "9",
                      lg: "7",
                      className: "justify-content-center",
                    },
                    r.a.createElement(
                      m.a,
                      null,
                      r.a.createElement(
                        d.a,
                        { xs: "12", className: "align-self-center" },
                        r.a.createElement("hr", {
                          className: "hr-text d-none d-lg-block mb-2",
                          "data-content": ""
                            .concat(a("Check Your"), " ")
                            .concat(
                              a(e.settings.store_configuration.ewgc.label),
                              " ",
                            )
                            .concat(a("Status")),
                        }),
                        r.a.createElement(
                          "div",
                          { className: "d-lg-none order-title mt-3 mb-2" },
                          ""
                            .concat(a("Check Your"), " ")
                            .concat(
                              a(e.settings.store_configuration.ewgc.label),
                              " ",
                            )
                            .concat(a("Status")),
                        ),
                        R.balanceError && ne(),
                      ),
                      r.a.createElement(
                        d.a,
                        { xs: "12", className: "mt-2" },
                        r.a.createElement(
                          m.a,
                          {
                            className:
                              "flex-wrap-reverse align-items-center ".concat(
                                e.settings.store_configuration.ewgc.cardImage
                                  ? "justify-content-between"
                                  : "justify-content-center text-center",
                              ),
                          },
                          r.a.createElement(
                            d.a,
                            {
                              xs: "12",
                              lg: "5",
                              className: "order-1 order-lg-2 my-3 my-lg-0",
                            },
                            r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                u.a,
                                {
                                  noMargin: !0,
                                  className: "has-float-label m-0",
                                },
                                r.a.createElement(i.a, {
                                  type: "text",
                                  placeholder: a("Enter Promo Code"),
                                  afterFocusPlaceholder: a("Promo Code"),
                                  name: "promoCode",
                                  value:
                                    ((Q = l),
                                    "-" === (Q = Q.split(""))[Q.length - 1]
                                      ? Q.slice(0, Q.length - 1)
                                      : 5 === Q.length
                                        ? Q.splice(4, 0, "-")
                                        : 12 === Q.length &&
                                          Q.splice(11, 0, "-"),
                                    Q.join("")),
                                  minLength: 15,
                                  maxLength: 16,
                                  changeHandler: J,
                                  keypressHandler: X,
                                  preventPaste: !1,
                                  onBlur: function () {
                                    return (
                                      (e = "Promo Code"),
                                      Z(l),
                                      D.showMessages(e),
                                      void C(!x)
                                    );
                                    var e;
                                  },
                                  disabled: B,
                                }),
                                ((q = "Promo Code"),
                                (G = p),
                                (K = "required|alpha_num|min:13|max:14"),
                                (W = D.message(q, G, K)),
                                r.a.createElement(
                                  "div",
                                  {
                                    className: j.a.isEmpty(W)
                                      ? ""
                                      : "invalid-feedback",
                                  },
                                  a(W),
                                )),
                              ),
                              r.a.createElement(
                                m.a,
                                null,
                                r.a.createElement(
                                  d.a,
                                  { xs: "12" },
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "float-end text-muted form-text",
                                    },
                                    r.a.createElement(
                                      "small",
                                      null,
                                      a("e.g. GRDR-TRHF6Y-TFDN"),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            z(te),
                            r.a.createElement(
                              m.a,
                              { className: "my-2" },
                              r.a.createElement(
                                d.a,
                                {
                                  xs: "12",
                                  className: "".concat(
                                    e.settings.store_configuration.ewgc
                                      .cardImage
                                      ? ""
                                      : "text-center",
                                  ),
                                },
                                r.a.createElement(c.a, {
                                  color: e.initialData.btnColor,
                                  isLoading: R.balanceLoading,
                                  disabled: B,
                                  className: "btn btn-secondary btnBal",
                                  type: "submit",
                                  bgColor: "#fff",
                                  value: a("Check Status"),
                                  isCamelCase: !0,
                                  clickHandler: te,
                                }),
                              ),
                            ),
                          ),
                          (function () {
                            if (e.settings.store_configuration.ewgc.cardImage)
                              return r.a.createElement(
                                d.a,
                                {
                                  xs: "12",
                                  lg: "5",
                                  className: "order-1 order-lg-2 my-3 my-lg-0",
                                },
                                r.a.createElement(
                                  m.a,
                                  { className: "justify-content-center" },
                                  r.a.createElement("img", {
                                    "data-src":
                                      e.settings.store_configuration.ewgc
                                        .cardImage,
                                    src: w.a,
                                  }),
                                ),
                              );
                          })(),
                        ),
                      ),
                      B
                        ? r.a.createElement(
                            d.a,
                            { xs: "12", className: "order-1 order-lg-2 mb-2" },
                            r.a.createElement("hr", null),
                            r.a.createElement(
                              m.a,
                              { className: "mb-2" },
                              r.a.createElement(
                                d.a,
                                { className: "h6" },
                                ""
                                  .concat(a("Your"), " ")
                                  .concat(
                                    a(
                                      e.settings.store_configuration.ewgc.label,
                                    ),
                                    " ",
                                  )
                                  .concat(a("Details")),
                              ),
                            ),
                            r.a.createElement(
                              m.a,
                              null,
                              r.a.createElement(
                                d.a,
                                null,
                                ((Y = [
                                  {
                                    detail: "Reference ID",
                                    value: R.balance.data.cardNumber,
                                  },
                                  {
                                    detail: "Status",
                                    value: R.balance.data.status,
                                  },
                                  { detail: "Promo Code", value: l },
                                  {
                                    detail: "Available Balance",
                                    value: e.renderCurrency(
                                      R.balance.data.balance,
                                      R.balance.data.currency.code,
                                      "",
                                      !1,
                                      !0,
                                    ),
                                  },
                                  {
                                    detail: "Expiry Date",
                                    value: e.renderDate(R.balance.data.expiry),
                                  },
                                ]),
                                r.a.createElement(
                                  "table",
                                  { className: "table" },
                                  r.a.createElement(
                                    "tbody",
                                    null,
                                    Y.map(function (e, t) {
                                      return r.a.createElement(
                                        "tr",
                                        {
                                          className:
                                            "table-light border-bottom",
                                          key: t,
                                        },
                                        r.a.createElement(
                                          "td",
                                          { className: "text-start px-0" },
                                          a(e.detail),
                                        ),
                                        r.a.createElement(
                                          "td",
                                          {
                                            className:
                                              "text-end fw-bold px-0 ".concat(
                                                e.detail === a("Status")
                                                  ? "ACTIVATED" === e.value
                                                    ? "text-success"
                                                    : "text-danger"
                                                  : "",
                                              ),
                                          },
                                          e.value,
                                        ),
                                      );
                                    }),
                                  ),
                                )),
                              ),
                            ),
                          )
                        : null,
                      ((V = Object(N.a)(f.a).withConfig({
                        displayName: "EWPC__StyledLink",
                        componentId: "sc-1whb7z7-0",
                      })(
                        [
                          "color:",
                          " !important;text-decoration:underline !important;cursor:pointer !important;font-size:12px !important;",
                        ],
                        e.initialData.primaryColor,
                      )),
                      r.a.createElement(
                        d.a,
                        { xs: "12", className: "order-1 order-lg-2 mt-2 mb-5" },
                        a("For more details please click on"),
                        " ",
                        r.a.createElement(V, { to: "/faq" }, a("FAQ")),
                        " ",
                        a("or"),
                        " ",
                        r.a.createElement(
                          V,
                          { to: "/terms" },
                          a("Terms and Conditions"),
                          ".",
                        ),
                      )),
                    ),
                  ),
                ),
                r.a.createElement(
                  d.a,
                  { xs: "12 text-center" },
                  e.getCaptchaMessage(),
                ),
              )
            : (($ = "/notfound"), void e.history.push($)),
        );
      });
    },
  },
]);

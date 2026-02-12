(this["webpackJsonpcroma-pdp-app"] =
  this["webpackJsonpcroma-pdp-app"] || []).push([
  [53],
  {
    1105: function (e, o, a) {
      "use strict";
      a.r(o);
      var t = a(0),
        l = a.n(t),
        n = a(450),
        i = a(435),
        c = a(437),
        s = a(39),
        u = a(35),
        r = a(29),
        d = a(1),
        p = a(2),
        v = a(119),
        m = a(17),
        C = a(15);
      var f = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          t =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "Apply Coupon";
        const l = Object(m.a)();
        let n = "",
          i = "";
        const c = Object(C.a)();
        let s = l && (l.previousPagename ? l.previousPagename : "");
        const u = [],
          r = [];
        ("checkout" === s
          ? (s = "order summery")
          : "cart" === s && (s = "cart summery"),
          (n = localStorage.getItem("3hrPincode")
            ? JSON.parse(localStorage.getItem("3hrPincode"))
            : ""),
          (i = "tcp" === localStorage.getItem("isTCPBody") ? "yes" : "No"),
          ("Apply Coupon" !== t && "Remove Coupon" !== t) ||
            (u.push("".concat(a)), r.push("".concat(e))));
        const d = {
          page: {
            pageName: "cart summary",
            prevPageName: s,
            channel: "croma:cart",
            emailID: c.user_email,
            mobNo: c.user_mobile,
            pinCode: n,
            couponValue: u,
            couponCode: r,
            couponStatus: o,
            tcpCustomer: i,
          },
          event: { linkName: t, linkType: "clicked", linkPosition: "body" },
        };
        "undefined" !== typeof window && (window.digitalData = d);
        try {
          "undefined" !== typeof window._satellite &&
            window._satellite &&
            window._satellite.track("otherClick");
        } catch (p) {}
      };
      var E = (e, o, a, t) => {
          window.dataLayer.push({
            event: "coupon_code_applied",
            coupon_code: a,
            coupon_application_status: e,
            coupon_value: o,
            offer_name: t || "N/A",
          });
        },
        O = a(12),
        D = a(27);
      o.default = (e) => {
        var o;
        let { data: a, setLoader: m, showToastMsg: C, makeEmptyOms: y } = e;
        const [N, S] = Object(t.useState)(!1),
          [g, I] = Object(t.useState)([]),
          [A, R] = Object(t.useState)(""),
          [h] = Object(r.a)();
        Object(t.useEffect)(() => {
          if (
            (null === a || void 0 === a ? void 0 : a.allOfferSavingsData) &&
            Array.isArray(
              null === a || void 0 === a ? void 0 : a.allOfferSavingsData,
            )
          ) {
            var e;
            const o =
              null === a ||
              void 0 === a ||
              null === (e = a.allOfferSavingsData) ||
              void 0 === e
                ? void 0
                : e.filter(
                    (e) =>
                      !!(null === e || void 0 === e ? void 0 : e.allCouponData),
                  );
            o && Array.isArray(o) ? I(o) : I([]);
          }
        }, [a]);
        const _ = function (e) {
            let o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              t =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "false";
            const l = localStorage.getItem("customer_hash"),
              n =
                "undefined" !== typeof Storage &&
                "true" === localStorage.getItem("isCSC"),
              i = localStorage.getItem("csc_code");
            let c = l;
            n && (c = i);
            let s = "",
              u = {},
              r = "";
            if ((l && "" !== l) || (i && "" !== i)) {
              var N, S;
              const e = Object(D.a)(
                localStorage.getItem("cr-cache:user-data"),
                "token",
              );
              if (
                e &&
                "" !== e &&
                (null === e ||
                void 0 === e ||
                null === (N = e.wishListInfo) ||
                void 0 === N ||
                null === (S = N.cartWsDto) ||
                void 0 === S
                  ? void 0
                  : S.code)
              ) {
                var g;
                const o = localStorage.getItem("access_token"),
                  a =
                    null === e ||
                    void 0 === e ||
                    null === (g = e.customerInfo) ||
                    void 0 === g
                      ? void 0
                      : g.customerHash,
                  t = document.head.querySelector(
                    "[name=tdl-sso-client_id][content]",
                  );
                ((u = {
                  client_id: t ? t.content : d.a.CLIENT_ID,
                  accessToken: o,
                  customerHash: a,
                  Usersource:
                    "undefined" === typeof Storage ||
                    ("tcp" !== localStorage.getItem("userSource") &&
                      "tcp-pwa" !== localStorage.getItem("userSource"))
                      ? "null"
                      : "TCP",
                }),
                  (s += ""
                    .concat(c, "/carts/")
                    .concat(
                      e.wishListInfo.cartWsDto.code,
                      "/cart-modification?forceRecalculate=true&fields=FULL&refreshCart=false",
                    )),
                  (r = e.wishListInfo.cartWsDto.code));
              }
            } else {
              const e = Object(D.a)(
                localStorage.getItem("cr-cache:guest-cart"),
                "token",
              );
              e &&
                "" !== e &&
                ((s += "anonymous/carts/".concat(
                  e.guid,
                  "/cart-modification?forceRecalculate=true&fields=FULL&refreshCart=false",
                )),
                (r = e.guid));
            }
            if (("" !== s) & ("" !== A || "" !== o)) {
              if (localStorage.getItem("3hrPincode")) {
                const e = JSON.parse(localStorage.getItem("3hrPincode"));
                s += "&pincode".concat(e);
              }
              const l = {};
              ("apply" === e
                ? (l.toBeAppliedCouponsList = [A])
                : "remove" === e && (l.toBeRemovedCouponsList = [o]),
                m(!0),
                Object(v.q)(s, l, u)
                  .then((l) => {
                    if ((m(!1), "success" === l.status)) {
                      const S = l.data;
                      if (
                        (null === S || void 0 === S
                          ? void 0
                          : S.allOfferSavingsData) &&
                        Array.isArray(
                          null === S || void 0 === S
                            ? void 0
                            : S.allOfferSavingsData,
                        )
                      ) {
                        var n;
                        const l =
                          null === S ||
                          void 0 === S ||
                          null === (n = S.allOfferSavingsData) ||
                          void 0 === n
                            ? void 0
                            : n.filter(
                                (e) =>
                                  !!(null === e || void 0 === e
                                    ? void 0
                                    : e.allCouponData),
                              );
                        if (l && Array.isArray(l)) {
                          if ((I(l), "apply" === e)) {
                            const e =
                              null === l || void 0 === l
                                ? void 0
                                : l.find(
                                    (e) => e.allCouponData[0].couponId === A,
                                  );
                            if (e) {
                              if (
                                null === S || void 0 === S
                                  ? void 0
                                  : S.cromaCustomerAppliedCouponDataList
                              ) {
                                var i;
                                const e =
                                  null === S ||
                                  void 0 === S ||
                                  null ===
                                    (i =
                                      S.cromaCustomerAppliedCouponDataList) ||
                                  void 0 === i
                                    ? void 0
                                    : i.find((e) => e.couponId === A);
                                e &&
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.customerDisplayText)
                                  ? C(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.customerDisplayText,
                                      O.f.SUCCESS,
                                      !0,
                                    )
                                  : C(p.a.COUPON_APPLIED, O.f.SUCCESS, !0);
                              } else C(p.a.COUPON_APPLIED, O.f.SUCCESS, !0);
                              (localStorage.setItem(
                                "cr-cache:cart-created-date",
                                JSON.stringify({
                                  cartId: r,
                                  createdAt: new Date(),
                                }),
                              ),
                                f(
                                  A,
                                  "Success",
                                  e.promotionSavings,
                                  "Apply Coupon",
                                ),
                                E(
                                  "Success",
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.promotionSavings,
                                  A,
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.customerDisplayText,
                                ),
                                R(""),
                                y());
                            } else {
                              let e = "Failure";
                              if (
                                null === S || void 0 === S
                                  ? void 0
                                  : S.cromaCustomerAppliedCouponDataList
                              ) {
                                var c;
                                const o =
                                  null === S ||
                                  void 0 === S ||
                                  null ===
                                    (c =
                                      S.cromaCustomerAppliedCouponDataList) ||
                                  void 0 === c
                                    ? void 0
                                    : c.find((e) => e.couponId === A);
                                o &&
                                (null === o || void 0 === o
                                  ? void 0
                                  : o.customerDisplayText)
                                  ? (C(
                                      null === o || void 0 === o
                                        ? void 0
                                        : o.customerDisplayText,
                                      O.f.ERROR,
                                      !0,
                                    ),
                                    (e =
                                      e +
                                      ":" +
                                      (null === o || void 0 === o
                                        ? void 0
                                        : o.customerDisplayText)))
                                  : (C(p.a.INVALID_COUPON, O.f.ERROR, !0),
                                    (e = e + ":" + p.a.INVALID_COUPON));
                              } else
                                (C(p.a.INVALID_COUPON, O.f.ERROR, !0),
                                  (e = e + ":" + p.a.INVALID_COUPON));
                              (f(A, e, 0, "Apply Coupon"),
                                E("Failure", 0, A),
                                m(!1));
                            }
                          } else if ("remove" === e && "" !== o) {
                            if (
                              null === l || void 0 === l
                                ? void 0
                                : l.find(
                                    (e) => e.allCouponData[0].couponId === o,
                                  )
                            ) {
                              if (
                                null === S || void 0 === S
                                  ? void 0
                                  : S.cromaCustomerAppliedCouponDataList
                              ) {
                                var s;
                                const e =
                                  null === S ||
                                  void 0 === S ||
                                  null ===
                                    (s =
                                      S.cromaCustomerAppliedCouponDataList) ||
                                  void 0 === s
                                    ? void 0
                                    : s.find((e) => e.couponId === o);
                                e &&
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.customerDisplayText)
                                  ? C(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.customerDisplayText,
                                      O.f.ERROR,
                                      !0,
                                    )
                                  : C(p.a.INVALID_COUPON, O.f.ERROR, !0);
                              } else C(p.a.INVALID_COUPON, O.f.ERROR, !0);
                              m(!1);
                            } else {
                              if (
                                null === S || void 0 === S
                                  ? void 0
                                  : S.cromaCustomerAppliedCouponDataList
                              ) {
                                var u;
                                const e =
                                  null === S ||
                                  void 0 === S ||
                                  null ===
                                    (u =
                                      S.cromaCustomerAppliedCouponDataList) ||
                                  void 0 === u
                                    ? void 0
                                    : u.find((e) => e.couponId === o);
                                e &&
                                (null === e || void 0 === e
                                  ? void 0
                                  : e.customerDisplayText)
                                  ? C(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.customerDisplayText,
                                      O.f.SUCCESS,
                                      !0,
                                    )
                                  : C(p.a.COUPON_REMOVED, O.f.SUCCESS, !0);
                              } else C(p.a.COUPON_REMOVED, O.f.SUCCESS, !0);
                              (localStorage.setItem(
                                "cr-cache:cart-created-date",
                                JSON.stringify({
                                  cartId: r,
                                  createdAt: new Date(),
                                }),
                              ),
                                f(o, "Coupon Removed", a, "Remove Coupon"),
                                y(),
                                "true" === t && _("apply"));
                            }
                          }
                        } else if ("apply" === e && "" !== A) {
                          let e = "Failure";
                          if (
                            null === S || void 0 === S
                              ? void 0
                              : S.cromaCustomerAppliedCouponDataList
                          ) {
                            var d;
                            const o =
                              null === S ||
                              void 0 === S ||
                              null ===
                                (d = S.cromaCustomerAppliedCouponDataList) ||
                              void 0 === d
                                ? void 0
                                : d.find((e) => e.couponId === A);
                            o &&
                            (null === o || void 0 === o
                              ? void 0
                              : o.customerDisplayText)
                              ? (C(
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.customerDisplayText,
                                  O.f.ERROR,
                                  !0,
                                ),
                                (e =
                                  e +
                                  ":" +
                                  (null === o || void 0 === o
                                    ? void 0
                                    : o.customerDisplayText)))
                              : (C(p.a.INVALID_COUPON, O.f.ERROR, !0),
                                (e = e + ":" + p.a.INVALID_COUPON));
                          } else
                            (C(p.a.INVALID_COUPON, O.f.ERROR, !0),
                              (e = e + ":" + p.a.INVALID_COUPON));
                          (m(!1),
                            f(A, e, 0, "Apply Coupon"),
                            E("Failure", 0, A));
                        } else if ("remove" === e && "" !== o) {
                          if (
                            null === S || void 0 === S
                              ? void 0
                              : S.cromaCustomerAppliedCouponDataList
                          ) {
                            var v;
                            const e =
                              null === S ||
                              void 0 === S ||
                              null ===
                                (v = S.cromaCustomerAppliedCouponDataList) ||
                              void 0 === v
                                ? void 0
                                : v.find((e) => e.couponId === o);
                            e &&
                            (null === e || void 0 === e
                              ? void 0
                              : e.customerDisplayText)
                              ? C(
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.customerDisplayText,
                                  O.f.SUCCESS,
                                  !0,
                                )
                              : C(p.a.COUPON_REMOVED, O.f.SUCCESS, !0);
                          } else C(p.a.COUPON_REMOVED, O.f.SUCCESS, !0);
                          (f(o, "Coupon Removed", a, "Remove Coupon"),
                            y(),
                            I([]),
                            "true" === t && _("apply"));
                        } else m(!1);
                      } else if ("apply" === e && "" !== A) {
                        let e = "Failure";
                        if (
                          null === S || void 0 === S
                            ? void 0
                            : S.cromaCustomerAppliedCouponDataList
                        ) {
                          var D;
                          const o =
                            null === S ||
                            void 0 === S ||
                            null ===
                              (D = S.cromaCustomerAppliedCouponDataList) ||
                            void 0 === D
                              ? void 0
                              : D.find((e) => e.couponId === A);
                          o &&
                          (null === o || void 0 === o
                            ? void 0
                            : o.customerDisplayText)
                            ? (C(
                                null === o || void 0 === o
                                  ? void 0
                                  : o.customerDisplayText,
                                O.f.ERROR,
                                !0,
                              ),
                              (e =
                                e +
                                ":" +
                                (null === o || void 0 === o
                                  ? void 0
                                  : o.customerDisplayText)))
                            : (C(p.a.INVALID_COUPON, O.f.ERROR, !0),
                              (e = e + ":" + p.a.INVALID_COUPON));
                        } else
                          (C(p.a.INVALID_COUPON, O.f.ERROR, !0),
                            (e = e + ":" + p.a.INVALID_COUPON));
                        (f(A, e, 0, "Apply Coupon"), E("Failure", 0, A), m(!1));
                      } else if ("remove" === e && "" !== o) {
                        if (
                          (I([]),
                          y(),
                          "true" === t && _("apply"),
                          null === S || void 0 === S
                            ? void 0
                            : S.cromaCustomerAppliedCouponDataList)
                        ) {
                          var N;
                          const e =
                            null === S ||
                            void 0 === S ||
                            null ===
                              (N = S.cromaCustomerAppliedCouponDataList) ||
                            void 0 === N
                              ? void 0
                              : N.find((e) => e.couponId === o);
                          e &&
                          (null === e || void 0 === e
                            ? void 0
                            : e.customerDisplayText) &&
                          (null === e || void 0 === e ? void 0 : e.isRemoved)
                            ? C(
                                null === e || void 0 === e
                                  ? void 0
                                  : e.customerDisplayText,
                                O.f.SUCCESS,
                                !0,
                              )
                            : C(p.a.COUPON_REMOVED, O.f.SUCCESS, !0);
                        } else C(p.a.COUPON_REMOVED, O.f.SUCCESS, !0);
                        f(o, "Coupon Removed", a, "Remove Coupon");
                      } else m(!1);
                    }
                  })
                  .catch((e) => {
                    m(!1);
                  }),
                R(""));
            }
          },
          L = () => {
            S(!1);
          },
          U = () => {
            var e, o;
            g.length > 0
              ? _(
                  "remove",
                  null === (e = g[0]) || void 0 === e
                    ? void 0
                    : e.allCouponData[0].couponId,
                  null === (o = g[0]) || void 0 === o
                    ? void 0
                    : o.promotionSavings,
                  "true",
                )
              : _("apply");
          };
        return l.a.createElement(
          l.a.Fragment,
          null,
          0 === g.length
            ? l.a.createElement(
                "button",
                { className: "apply-coupon-button", onClick: () => S(!0) },
                l.a.createElement(
                  "div",
                  { className: "apply-coupen-symbol-whitetheme" },
                  "%",
                ),
                l.a.createElement(
                  "span",
                  { class: "Apply-coupon" },
                  "Apply Coupon ",
                ),
                l.a.createElement(n.a, {
                  className: "menu-click-arrow",
                  onClick: () => S(!0),
                }),
              )
            : l.a.createElement(
                "button",
                { className: "apply-coupon-button" },
                l.a.createElement(
                  "div",
                  { className: "apply-coupen-symbol-whitetheme" },
                  "%",
                ),
                l.a.createElement(
                  "span",
                  { class: "Apply-coupon" },
                  0 === g.length
                    ? "APPLY COUPON"
                    : l.a.createElement(
                        l.a.Fragment,
                        null,
                        "Coupon Applied  ",
                        l.a.createElement(
                          "span",
                          { className: "you-saved" },
                          "You saved \u20b9",
                          null === (o = g[0]) || void 0 === o
                            ? void 0
                            : o.promotionSavings,
                        ),
                      ),
                ),
                g.length > 0 &&
                  l.a.createElement(
                    "span",
                    {
                      className: "remove-coupon",
                      onClick: () => {
                        var e, o;
                        (_(
                          "remove",
                          null === (e = g[0]) || void 0 === e
                            ? void 0
                            : e.allCouponData[0].couponId,
                          null === (o = g[0]) || void 0 === o
                            ? void 0
                            : o.promotionSavings,
                        ),
                          L());
                      },
                    },
                    "Remove",
                  ),
                l.a.createElement(n.a, { className: "menu-click-arrow" }),
              ),
          l.a.createElement(
            i.a,
            { onClose: L, open: N && h > 767 },
            l.a.createElement(
              c.a,
              null,
              l.a.createElement(
                "div",
                { className: "Coupon-container" },
                l.a.createElement(
                  "div",
                  { className: "coupon-dialog-heading" },
                  l.a.createElement(
                    "span",
                    { className: "Coupons" },
                    "Coupons",
                  ),
                  l.a.createElement(
                    "span",
                    { className: "coupon-cross", onClick: L },
                    d.a.CROMA_DARK_THEME
                      ? l.a.createElement(s.a, null)
                      : l.a.createElement(u.a, null),
                  ),
                ),
                l.a.createElement(
                  "div",
                  { className: "Enter-Coupon-Code" },
                  "Enter Coupon Code",
                ),
                (null === d.a || void 0 === d.a
                  ? void 0
                  : d.a.ENABLE_COUPON_INCART) &&
                  l.a.createElement(
                    "div",
                    { className: "coupon-input-container" },
                    l.a.createElement("input", {
                      type: "text",
                      name: "coupoun",
                      id: "",
                      className: "Coupon-input",
                      value: A,
                      onChange: (e) => R(e.target.value.toUpperCase()),
                    }),
                    l.a.createElement(
                      "button",
                      {
                        type: "button",
                        className: "coupon-apply-button",
                        onClick: () => {
                          (U(), L());
                        },
                      },
                      " Apply ",
                    ),
                  ),
              ),
            ),
          ),
          l.a.createElement(
            i.a,
            {
              classes: {
                paper: d.a.CROMA_DARK_THEME
                  ? "mini-cart-dailog"
                  : "dark-theme mini-cart-dailog",
              },
              open: N && h <= 767,
              onClose: () => {
                L();
              },
              disableEscapeKeyDown: !0,
            },
            l.a.createElement(
              c.a,
              null,
              l.a.createElement(
                "div",
                {
                  className: "close-btn mini-cart-dialog-close-mob",
                  onClick: () => {
                    L();
                  },
                },
                d.a.CROMA_DARK_THEME
                  ? l.a.createElement(s.a, null)
                  : l.a.createElement(u.a, null),
              ),
              l.a.createElement(
                "div",
                {
                  className: "mini-cart-product-container cart-coupon-section",
                },
                l.a.createElement(
                  "div",
                  { className: "mini-cart-style" },
                  l.a.createElement(
                    "div",
                    { className: "coupon-dialog-heading" },
                    l.a.createElement(
                      "span",
                      { className: "Coupons" },
                      "Coupons",
                    ),
                  ),
                ),
                l.a.createElement(
                  "div",
                  { className: "Enter-Coupon-Code" },
                  "Enter Coupon Code",
                ),
                (null === d.a || void 0 === d.a
                  ? void 0
                  : d.a.ENABLE_COUPON_INCART) &&
                  l.a.createElement(
                    "div",
                    { className: "coupon-input-container" },
                    l.a.createElement("input", {
                      type: "text",
                      name: "coupoun",
                      id: "",
                      className: "Coupon-input",
                      value: A,
                      onChange: (e) => R(e.target.value.toUpperCase()),
                    }),
                    l.a.createElement(
                      "button",
                      {
                        type: "button",
                        className: "coupon-apply-button",
                        onClick: () => {
                          (U(), L());
                        },
                      },
                      " Apply ",
                    ),
                  ),
              ),
            ),
          ),
        );
      };
    },
  },
]);

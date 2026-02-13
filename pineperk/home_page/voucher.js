var allBrandSchemeWiseJsonObj = {};
var cartMode = "";
jQuery(document).ready(function(c) {
    var b = false;
    var d = 50;
    var a = 0;
    c(".categories li").each(function() {
        var e = c(this).outerWidth();
        d += e
    });
    c(".categories").css({
        width: d
    });
    c(".prev-button").click(function() {
        var f = c(".categories-wrapper").outerWidth();
        var g = c(".categories").position().left;
        var l = Math.abs(g);
        var j = c(".prev-button").outerWidth();
        j = 2 * j;
        b = false;
        var i = d - f;
        var e;
        if (parseFloat(i) > 0) {
            if (parseFloat(i) > f) {
                if (parseFloat(f) > 600) {
                    e = parseFloat(f) / 2
                } else {
                    e = f
                }
            } else {
                e = parseFloat(i)
            }
        } else {
            return
        }
        if (parseFloat(g) < parseFloat(j)) {
            var h;
            if ((parseFloat(g) + parseFloat(e)) < parseFloat(j)) {
                h = parseFloat(e)
            } else {
                h = parseFloat(l)
            }
            var k = parseFloat(g) + parseFloat(h);
            c(".categories").animate({
                left: k
            }, "slow")
        }
    });
    c(".next-button").click(function() {
        var f = c(".categories-wrapper").outerWidth();
        var g = c(".categories").position().left;
        var l = Math.abs(g);
        var j = c(".prev-button").outerWidth();
        j = 2 * j;
        var i = parseFloat(d) - parseFloat(f);
        var e;
        if (parseFloat(i) > 0) {
            if (parseFloat(i) > f) {
                if (parseFloat(f) > 600) {
                    e = parseFloat(f) / 2
                } else {
                    e = f
                }
            } else {
                e = parseFloat(i)
            }
        } else {
            return
        }
        if (parseFloat(i) > 0 && parseFloat(l) < parseFloat(i)) {
            var h;
            if ((parseFloat(l) + parseFloat(e)) < parseFloat(i)) {
                h = parseFloat(e)
            } else {
                h = parseFloat(i) - parseFloat(l)
            }
            var k;
            if (!b) {
                k = -(parseFloat(j) + parseFloat(h))
            } else {
                k = parseFloat(g) - parseFloat(h)
            }
            c(".categories").animate({
                left: k
            }, "slow");
            b = true
        }
    });
    c(document).on("change", '[id*="selectAmount_brand_"]', function() {
        var h = this.id;
        var f = this.value;
        var e = false;
        var g = h.substring(h.lastIndexOf("_") + 1);
        if (c("#scheme-flexi-denomination-" + g).is(":visible")) {
            e = true
        }
        changeDenominationAmtAnddiscountText(f, g, e)
    });
    c(document).on("change", '[id*="scheme-flexi-denomination-"]', function(e) {
        var h = this.id;
        var f = this.value;
        var g = h.substring(h.lastIndexOf("-") + 1);
        if (f == "") {
            c("select#selectAmount_brand_" + g).val("0");
            c("select#selectQuantity_brand_" + g).val("0");
            return
        }
        if (c("select#selectAmount_brand_" + g).val() != f * 100) {
            c("select#selectAmount_brand_" + g).val("0")
        }
        c("#selectQuantity_brand_" + g).val("1")
    });
    c(document).on("click", '[id*="addtocart-btn-"]', function() {
        var f = this.id;
        c("#" + f).attr("disabled", "disabled");
        var e = f.substring(f.lastIndexOf("-") + 1);
        addItemsToCart(e, f)
    });
    c(document).on("click", '[id*="category-btn-"]', function() {
        c("#searchBrandVoucher").val("").change();
        var f = this.id;
        var e = f.substring(f.lastIndexOf("-") + 1);
        showCategorySpecificVoucher(e, "", false)
    });
    c(document).on("click", '[id*="terms-condition-"]', function() {
        var g = this.id;
        var e = g.substring(g.lastIndexOf("-") + 1);
        var f = e.split("^^");
        showBrandTermsAndConditionText(f[0], f[1])
    });
    c(document).on("click", "#tnc-popup-close-btn", function() {
        c("#tnc-popup-div").css("visibility", "hidden")
    });
    c(document).on("click", "#read-more-tnc", function() {
        c("#read-more-tnc").hide();
        c("#secondryTermsAndConditionTextId").show()
    });
    c(document).on("click", "#show-more-voucher-link, #show-more-voucher-link-page-load", function() {
        c("#show-more-voucher-link-div").hide();
        c("#show-more-voucher-link-page-load-div").hide();
        var e = findActiveCategoryId();
        showCategorySpecificVoucher(e, "", true)
    })
});
function setCartMode(a) {
    cartMode = a
}
function populateCategoryWiseBrandList(c) {
    var b = JSON.parse(c);
    for (var a in b) {
        allBrandSchemeWiseJsonObj = b[a]
    }
}
function addItemsToCart(k, h) {
    var f = $("#selectAmount_brand_" + k).val();
    var e = $("#selectQuantity_brand_" + k).val();
    var c;
    var j;
    var a = false;
    if ($("#scheme-flexi-denomination-" + k).is(":visible")) {
        f = $("#scheme-flexi-denomination-" + k).val();
        a = true;
        $.each(allBrandSchemeWiseJsonObj, function(l) {
            var m = allBrandSchemeWiseJsonObj[l];
            if (parseInt(m.brandSchemeId) == parseInt(k)) {
                c = m.minDenomination;
                j = m.maxDenomination
            }
        })
    }
    if (!(isValidString(f) && parseInt(f) > 0)) {
        var g = "Amount is mandatory";
        $("#" + h).removeAttr("disabled");
        showCustomerPopup(g);
        return false
    }
    if (a) {
        if (parseInt(f) > parseInt(j) || parseInt(f) < parseInt(c)) {
            var g = "Amount must be between " + c + " and " + j;
            $("#" + h).removeAttr("disabled");
            showCustomerPopup(g);
            return false
        }
        f = f * 100
    }
    if (!(isValidString(e) && parseInt(e) > 0)) {
        var g = "Quantity is mandatory";
        $("#" + h).removeAttr("disabled");
        showCustomerPopup(g);
        return false
    }
    var i = {
        brandSchemeId: k,
        quantity: e,
        amount: f
    };
    var d;
    var b;
    if (cartMode == 1) {
        if (externalRequest === "true") {
            b = "/ext/addVoucher"
        } else {
            b = "/addVoucher"
        }
    } else {
        if (cartMode == 2) {
            b = "/addGiftVoucher"
        }
    }
    $.ajax({
        url: b,
        type: "POST",
        async: true,
        data: JSON.stringify(i),
        dataType: "json",
        contentType: "application/json",
        success: function(m) {
            var o = JSON.stringify(m);
            var l = $.parseJSON(o);
            var n = l.status;
            var s = l.message;
            if (n == 1) {
                var p = l.customerOrderDTO;
                var q = p.totalQuantity;
                var r = p.orderSchemeList;
                if (cartMode == 1) {
                    createDynamicElement({
                        tag: "sup",
                        "class": "cents mybag-count",
                        text: q
                    }, $("#customerVoucherCartItemCount"));
                    createDynamicElement({
                        tag: "sup",
                        "class": "cents mybag-count",
                        text: q
                    }, $("#customerVoucherCartItemCount-mobile"));
                    showVoucherInCart(r)
                } else {
                    if (cartMode == 2) {
                        createDynamicElement({
                            tag: "sup",
                            "class": "cents mybag-count",
                            text: q
                        }, $("#customerGiftCartItemCount"));
                        createDynamicElement({
                            tag: "sup",
                            "class": "cents mybag-count",
                            text: q
                        }, $("#customerGiftCartItemCount-mobile"));
                        showVoucherInGiftCart(r);
                        $("#skip-to-send-greeting-btn").css("display", "none")
                    }
                }
                $(window).scrollTop($(".container").offset().top)
            } else {
                if (n == 2) {
                    showCustomerPopup(s)
                }
            }
            $("#" + h).removeAttr("disabled");
            refreshAddCartItemData(k, a)
        },
        error: function(l) {
            window.location.href = window.location.pathname
        }
    })
}
function showCategorySpecificVoucher(d, g, e) {
    var k;
    var b;
    var j = false;
    var i = false;
    var a = false;
    var f = false;
    $("#show-more-voucher-link-page-load-div").hide();
    $("#show-more-voucher-link-div").hide();
    if (g.trim() == "") {
        g = 0
    }
    var h = 0;
    if (d == "all") {
        $.each(allBrandSchemeWiseJsonObj, function(l) {
            var m = allBrandSchemeWiseJsonObj[l];
            k = m.brandSchemeId;
            b = m.brandId;
            f = m.isOfFlexibleDenomination;
            refreshAddCartItemData(k, f);
            if (g == 0) {
                if (!e) {
                    h++
                }
                if (h <= 14) {
                    $("#brand_" + k).show()
                } else {
                    $("#brand_" + k).hide()
                }
            } else {
                if (parseInt(g) == parseInt(b)) {
                    $("#brand_" + k).show()
                } else {
                    $("#brand_" + k).hide()
                }
            }
        })
    } else {
        if (d == "food" || d == "fuel" || d == "special") {
            $.each(allBrandSchemeWiseJsonObj, function(l) {
                var m = allBrandSchemeWiseJsonObj[l];
                k = m.brandSchemeId;
                j = m.isFoodVoucher == undefined ? false : m.isFoodVoucher;
                i = m.isFuelVoucher == undefined ? false : m.isFuelVoucher;
                a = m.isSpecialVoucher == undefined ? false : m.isSpecialVoucher;
                f = m.isOfFlexibleDenomination;
                var n = false;
                if (d == "food" && j) {
                    n = true
                }
                if (d == "fuel" && i) {
                    n = true
                }
                if (d == "special" && a) {
                    n = true
                }
                refreshAddCartItemData(k, f);
                if (n) {
                    if (!e) {
                        h++
                    }
                    if (h <= 14) {
                        $("#brand_" + k).show()
                    } else {
                        $("#brand_" + k).hide()
                    }
                } else {
                    $("#brand_" + k).hide()
                }
            })
        } else {
            $.each(allBrandSchemeWiseJsonObj, function(l) {
                var m;
                var n = allBrandSchemeWiseJsonObj[l];
                k = n.brandSchemeId;
                m = n.categoryId;
                f = n.isOfFlexibleDenomination;
                refreshAddCartItemData(k, f);
                var o = $.inArray(parseInt(d), m);
                if (o != -1) {
                    if (!e) {
                        h++
                    }
                    if (h <= 14) {
                        $("#brand_" + k).show()
                    } else {
                        $("#brand_" + k).hide()
                    }
                } else {
                    $("#brand_" + k).hide()
                }
            })
        }
    }
    if (g == 0 && h > 14) {
        $("#show-more-voucher-link-div").show()
    }
    var c = findActiveCategoryId();
    showCurrentCategorySelected(d, c)
}
function changeDenominationAmtAnddiscountText(g, l, a) {
    var j;
    var e;
    var k;
    var f;
    var d;
    var b;
    var c;
    var h = "";
    var i = "";
    if (!a) {
        $("#special-offer-" + l).text("");
        $("#handling-charges-" + l).text("");
        $("#brand_offer_text_" + l).hide()
    }
    if (parseInt(g) <= 0) {
        if (a) {
            $("#scheme-flexi-denomination-" + l).val("")
        }
        $("#selectQuantity_brand_" + l).val("0");
        return
    } else {
        $("#selectQuantity_brand_" + l).val("1")
    }
    if (a) {
        $("#scheme-flexi-denomination-" + l).val(getUnformattedAmountInRupeeToDisplay(g));
        return
    }
    $.each(allBrandSchemeWiseJsonObj, function(n) {
        $.each(allBrandSchemeWiseJsonObj[n], function(p, o) {
            j = allBrandSchemeWiseJsonObj[n].brandSchemeId;
            e = allBrandSchemeWiseJsonObj[n].additionalChargeList
        });
        if (parseInt(j) == parseInt(l)) {
            $.each(e, function(o) {
                $.each(e[o], function(q, p) {
                    c = e[o].denomination;
                    d = e[o].discountAmount;
                    b = e[o].discountPercentage;
                    k = e[o].handlingChargesAmount;
                    f = e[o].handlingChargesPercentage
                });
                if (parseInt(c) == parseInt(g)) {
                    if (!isNaN(d) && parseFloat(d) > 0) {
                        h = "Special Offer : <i class='fa fa-inr va-m'></i> " + d + " Off"
                    } else {
                        if (!isNaN(b) && parseFloat(b) > 0) {
                            h = "Special Offer : " + b + "% Off"
                        }
                    }
                    if (!isNaN(k) && parseFloat(k) > 0) {
                        i = "Handling Charges : <i class='fa fa-inr va-m'></i> " + k
                    } else {
                        if (!isNaN(f) && parseFloat(f) > 0) {
                            i = "Handling Charges : " + f + "% "
                        }
                    }
                    return false
                }
            });
            if (h != "" || i != "") {
                $("#brand_offer_text_" + l).show();
                var m = false;
                if (h != "") {
                    sanitizeDynamicHTML(h, "#special-offer-" + l);
                    m = true
                }
                if (i != "") {
                    if (m) {
                        i = "| " + i
                    }
                    sanitizeDynamicHTML(i, "#handling-charges-" + l)
                }
            }
            return false
        }
    })
}
function showBrandTermsAndConditionText(b, e) {
    if (!(isValidString(b) && isValidString(e))) {
        return false
    }
    var a = {
        brandTermsAndConditionId: b
    };
    var c;
    var d;
    if (externalRequest === "true") {
        d = "/ext/readTermsAndCondition"
    } else {
        d = "/readTermsAndCondition"
    }
    $.ajax({
        url: d,
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(k) {
            var p = JSON.stringify(k);
            var h = $.parseJSON(p);
            var l = h.status;
            var r = h.message;
            if (l == 1) {
                var i = h.termsAndConditionsDTO.primaryTermsAndConditions;
                var g = h.termsAndConditionsDTO.secondaryTermsAndConditions;
                var m = $("#brand-logo-url-" + e).attr("src");
                var q = "<ul class='listStyle text-pink'>";
                var f = "<ul class='listStyle text-pink'>";
                $("#secondryTermsAndConditionTextId").hide();
                if (isValidString(i)) {
                    var o = i.split("\n");
                    $.each(o, function(s) {
                        if (o[s].trim().length > 0) {
                            q = q + "<li><span>" + o[s] + "</span></li>"
                        } else {
                            q = q + "<li style='min-height: 20px;'></li>"
                        }
                    });
                    q = q + "</ul>"
                }
                if (isValidString(g)) {
                    q = q + "<p id='read-more-tnc' class='text-start fs-16'><a>Read more</a></p>";
                    var n = g.split("\n");
                    $.each(n, function(s) {
                        if (n[s].trim().length > 0) {
                            f = f + "<li><span>" + n[s] + "</span></li>"
                        } else {
                            f = f + "<li style='min-height: 20px;'></li>"
                        }
                    });
                    f = f + "</ul>"
                }
                var j;
                $.each(allBrandSchemeWiseJsonObj, function(s) {
                    $.each(allBrandSchemeWiseJsonObj[s], function(u, t) {
                        var v = allBrandSchemeWiseJsonObj[s].brandSchemeId;
                        if (parseInt(v) == parseInt(e)) {
                            j = allBrandSchemeWiseJsonObj[s].expiryDateToDisplay;
                            return false
                        }
                    })
                });
                $("#tnc-brand-logo-url").attr("src", m);
                sanitizeDynamicHTML(q, "#primaryTermsAndConditionTextId");
                sanitizeDynamicHTML(f, "#secondryTermsAndConditionTextId");
                $("#termsAndConditionExpiryDateId").text(j);
                $("#tnc-popup-div").css("visibility", "visible")
            } else {
                if (l == 2) {
                    showCustomerPopup(r)
                }
            }
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function findActiveCategoryId() {
    var a;
    $("#brandCategories li").each(function(b) {
        var c = $(this).attr("id");
        if ($("a", this).attr("class") == "active") {
            a = c;
            return
        }
    });
    return a
}
function showCurrentCategorySelected(a, b) {
    if (a != b) {
        $("#" + a).find("a").addClass("active");
        $("#" + b).find("a").removeClass("active")
    }
}
function refreshAddCartItemData(b, a) {
    $("select#selectAmount_brand_" + b).val("0");
    $("select#selectQuantity_brand_" + b).val("0");
    if (a) {
        $("#scheme-flexi-denomination-" + b).val("")
    } else {
        $("#special-offer-" + b).text("");
        $("#handling-charges-" + b).text("");
        $("#brand_offer_text_" + b).hide()
    }
}
;
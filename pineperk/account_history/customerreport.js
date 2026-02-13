var orderWiseGiftDetail = {};
var customerVoucherList = {};
jQuery(document).ready(function(a) {
    a(".error-msg").removeClass("is-visible");
    a(document).on("keydown", "#cust-thanku-note", function(c) {
        var b = c.key.charCodeAt();
        if (!((b >= "65" && b <= "90") || (b >= "97" && b <= "122") || (b >= "48" && b <= "57") || b == "32" || b == "33" || b == "35" || b == "38" || b == "39" || b == "43" || b == "44" || b == "45" || b == "46" || b == "65" || b == "66" || b == "69" || b == "84" || b == "92" || b == "58" || b == "40" || b == "41")) {
            return false
        }
    });
    a(document).on("click", '[id*="order-detail-info-"]', function() {
        var c = this.id;
        a("#" + c).hide();
        var b = c.substring(c.lastIndexOf("-") + 1);
        customerOrderDetail(b, c)
    });
    a(document).on("click", "#customer-order-popup-close-btn", function() {
        a("#customer-order-popup-div").css("visibility", "hidden")
    });
    a(document).on("click", "#cust-acc-history-rewards", function() {
        showCustomerAccountHistory(1)
    });
    a(document).on("click", "#cust-acc-history-fuel", function() {
        showCustomerAccountHistory(2)
    });
    a(document).on("click", "#cust-acc-history-meal", function() {
        showCustomerAccountHistory(3)
    });
    a(document).on("click", "#cust-acc-history-gift", function() {
        showCustomerAccountHistory(4)
    });
    a(document).on("click", "#add-money-to-pine-wallet", function() {
        a("#add-money-to-pine-wallet").attr("disabled", "disabled");
        window.location.href = "/loadWallet"
    });
    a(document).on("click", "#cust-gift-receive", function() {
        removeReportPageErrorMessage();
        a('[id^="cust-gift-sent-div-"]').hide();
        a("#sent-gift-static-message").hide();
        a("#received-gift-static-message").show();
        a("#cust-gift-sent").removeClass("active");
        a("#cust-gift-receive").addClass("active");
        a('[id^="cust-gift-received-div-"]').show()
    });
    a(document).on("click", "#cust-gift-sent", function() {
        removeReportPageErrorMessage();
        a('[id^="cust-gift-received-div-"]').hide();
        a("#received-gift-static-message").hide();
        a("#sent-gift-static-message").show();
        a("#cust-gift-receive").removeClass("active");
        a("#cust-gift-sent").addClass("active");
        a('[id^="cust-gift-sent-div-"]').show()
    });
    a(document).on("click", '[id^="received-gift-detail-"]', function() {
        removeReportPageErrorMessage();
        var d = this.id;
        var b = d.substring(d.lastIndexOf("-") + 1);
        var c;
        a.each(orderWiseGiftDetail, function(e) {
            a.each(orderWiseGiftDetail[e], function(h, f) {
                var g = orderWiseGiftDetail[e].orderId;
                if (parseInt(g) == parseInt(b)) {
                    c = orderWiseGiftDetail[e];
                    return false
                }
            })
        });
        if (c != undefined && c.giftReceived != null && c.giftReceived) {
            viewReceivedGiftDetail(b)
        }
    });
    a(document).on("click", "#cust-send-new-gift", function() {
        a("#cust-send-new-gift").attr("disabled", "disabled");
        window.location.href = "/sendGift"
    });
    a(document).on("click", '[id^="sent-gift-detail-"]', function() {
        removeReportPageErrorMessage();
        var d = this.id;
        var b = d.substring(d.lastIndexOf("-") + 1);
        var c;
        a.each(orderWiseGiftDetail, function(e) {
            a.each(orderWiseGiftDetail[e], function(h, f) {
                var g = orderWiseGiftDetail[e].orderId;
                if (parseInt(g) == parseInt(b)) {
                    c = orderWiseGiftDetail[e];
                    return false
                }
            })
        });
        if (c != undefined && c.giftReceived != null && !c.giftReceived) {
            viewSentGiftDetail(b)
        }
    });
    a(document).on("click", "#customer-sent-gift-popup-close-btn", function() {
        a("#customer-sent-gift-popup-div").css("visibility", "hidden")
    });
    a(document).on("click", "#customer-received-gift-popup-close-btn", function() {
        a("#customer-received-gift-popup-div").css("visibility", "hidden")
    });
    a(document).on("click", '[id^="received-gift-share-facebook-"], [id^="sent-gift-share-facebook-"]', function(c) {
        if (checkMac()) {
            removeReportPageErrorMessage();
            var i = this.id;
            var b = i.substring(i.lastIndexOf("-") + 1);
            showSocialShareLoader(b);
            var g = i.substring(0, i.lastIndexOf("-"));
            var d;
            if (g == "received-gift-share-facebook") {
                d = "#cust-recieved-gift-greeting-img-" + b + " > img"
            } else {
                d = "#cust-send-gift-greeting-img-" + b + " > img"
            }
            var f = a(d).attr("src");
            try {
                getDataUri(f, dataURItoBlob, b)
            } catch (h) {
                console.log(h);
                checkShareStatus(false, b, 1)
            }
        }
    });
    a(document).on("click", "#unused-brand-voucher-link", function() {
        removeReportPageErrorMessage();
        showBrandVoucherLink()
    });
    a(document).on("click", "#used-brand-voucher-link", function() {
        removeReportPageErrorMessage();
        showUsedVoucherLink()
    });
    a(document).on("click", '[id^="mark-voucher-used-"]', function() {
        var c = this.id;
        var b = c.substring(c.lastIndexOf("-") + 1);
        a("#" + c).hide();
        markVoucher(true, b)
    });
    a(document).on("click", '[id^="mark-voucher-unused-"]', function() {
        var c = this.id;
        var b = c.substring(c.lastIndexOf("-") + 1);
        a("#" + c).hide();
        markVoucher(false, b)
    });
    a(document).on("click", "#cust-regenerate-voucher-otp", function() {
        removeReportPageErrorMessage();
        showConfirmPopup("Some Brand Vouchers need OTP verification at the time of Redemption. Would you like to Generate an OTP in advance? This OTP will be valid for 30 min.", confirmBoxOperation)
    });
    a(document).on("click", '[id^="cust-say-thanku-link-"]', function() {
        removeReportPageErrorMessage();
        var d = this.id;
        var b = d.substring(d.lastIndexOf("-") + 1);
        var c;
        a.each(orderWiseGiftDetail, function(e) {
            a.each(orderWiseGiftDetail[e], function(h, g) {
                var f = orderWiseGiftDetail[e].orderId;
                if (parseInt(f) == parseInt(b)) {
                    c = orderWiseGiftDetail[e];
                    return false
                }
            })
        });
        if (c != undefined && c.giftReceived != null && c.giftReceived) {
            if (c.thankuNoteSent) {
                showThankuResponseMessage(c.thankuNoteToView);
                a("#cust-thanku-note").attr("readonly", "readonly")
            } else {
                a("#cust-thanku-note-order-id").val(b);
                a("#cust-thanku-note-btn").show();
                a("#cust-thanku-note").val("");
                a("#cust-thanku-note").removeAttr("readonly");
                a("#cust-thanku-note-btn").removeAttr("disabled");
                a("#cust-thanku-note-popup-div").css("visibility", "visible")
            }
        }
    });
    a(document).on("keypress", "#cust-thanku-note", function() {
        removeReportPageErrorMessage()
    });
    a(document).on("click", "#cust-thanku-note-popup-close-btn", function() {
        removeReportPageErrorMessage();
        a("#cust-thanku-note").val("");
        a("#cust-thanku-note").removeAttr("readonly");
        a("#cust-thanku-note-btn").removeAttr("disabled");
        a("#cust-thanku-note-popup-div").css("visibility", "hidden")
    });
    a(document).on("click", "#cust-thanku-note-btn", function() {
        removeReportPageErrorMessage();
        a("#cust-thanku-note-btn").attr("disabled", "disabled");
        var b = a("#cust-thanku-note-order-id").val();
        var c;
        a.each(orderWiseGiftDetail, function(d) {
            a.each(orderWiseGiftDetail[d], function(g, f) {
                var e = orderWiseGiftDetail[d].orderId;
                if (parseInt(e) == parseInt(b)) {
                    c = orderWiseGiftDetail[d];
                    return false
                }
            })
        });
        if (c != undefined && c.giftReceived != null && c.giftReceived) {
            sendThankuNote(b)
        } else {
            a("#cust-thanku-note-btn").removeAttr("disabled")
        }
    });
    a(document).on("click", '[id^="cust-recieved-gift-greeting-img-"]', function() {
        removeReportPageErrorMessage();
        var e = this.id;
        var c = e.substring(e.lastIndexOf("-") + 1);
        var d;
        a.each(orderWiseGiftDetail, function(f) {
            a.each(orderWiseGiftDetail[f], function(i, h) {
                var g = orderWiseGiftDetail[f].orderId;
                if (parseInt(g) == parseInt(c)) {
                    d = orderWiseGiftDetail[f];
                    return false
                }
            })
        });
        if (d != undefined && d.giftReceived != null && d.giftReceived) {
            var b;
            if (isValidString(d.greetingURL)) {
                b = d.greetingURL
            }
            if (isValidString(b)) {
                if (!d.giftViewed) {
                    markGreetingViewed(c)
                }
                showGreetingImagePopup(b)
            }
        }
    });
    a(document).on("click", '[id^="cust-send-gift-greeting-img-"]', function() {
        removeReportPageErrorMessage();
        var d = this.id;
        var b = d.substring(d.lastIndexOf("-") + 1);
        var c;
        a.each(orderWiseGiftDetail, function(e) {
            a.each(orderWiseGiftDetail[e], function(h, g) {
                var f = orderWiseGiftDetail[e].orderId;
                if (parseInt(f) == parseInt(b)) {
                    c = orderWiseGiftDetail[e];
                    return false
                }
            })
        });
        if (c != undefined && c.giftReceived != null && !c.giftReceived) {
            if (isValidString(c.greetingURL)) {
                showGreetingImagePopup(c.greetingURL)
            }
        }
    });
    a(document).on("click", "#greeting-image-popup-div-close-btn", function() {
        a("#greeting-image-popup-div").css("visibility", "hidden")
    });
    a(document).on("click", '[id^="received-thanku-note-"]', function() {
        removeReportPageErrorMessage();
        var d = this.id;
        var b = d.substring(d.lastIndexOf("-") + 1);
        var c;
        a.each(orderWiseGiftDetail, function(e) {
            a.each(orderWiseGiftDetail[e], function(h, g) {
                var f = orderWiseGiftDetail[e].orderId;
                if (parseInt(f) == parseInt(b)) {
                    c = orderWiseGiftDetail[e];
                    return false
                }
            })
        });
        if (c != undefined && c.giftReceived != null && !c.giftReceived) {
            showThankuResponseMessage(c.thankuNoteToView)
        }
    });
    a(document).on("click", '[id^="voucher-detail-email-"]', function() {
        var g = this.id;
        var c = g.substring(g.lastIndexOf("-") + 1);
        var d = c.split("^");
        var f = d[0];
        var b = d[1];
        var e = false;
        a.each(customerVoucherList, function(h) {
            var i = customerVoucherList[h];
            if (parseInt(f) == parseInt(i.voucherId)) {
                if (!i.isVoucherExpired) {
                    e = true
                }
                return false
            }
        });
        if (e) {
            removeReportPageErrorMessage();
            emailVoucherDetail(f, b)
        }
    });
    a(document).on("click", '[id^="voucher-detail-sms-"]', function() {
        var g = this.id;
        var d = g.substring(g.lastIndexOf("-") + 1);
        var e = d.split("^");
        var f = e[0];
        var c = e[1];
        var b = false;
        a.each(customerVoucherList, function(h) {
            var i = customerVoucherList[h];
            if (parseInt(f) == parseInt(i.voucherId)) {
                if (!i.isVoucherExpired) {
                    b = true
                }
                return false
            }
        });
        if (b) {
            removeReportPageErrorMessage();
            smsVoucherDetail(f, c)
        }
    });
    a(document).on("click", "#gen-acc-statement-link", function() {
        a("#gen-acc-statement-link").hide();
        a("#gen-acc-statement-link-loader").removeClass("hide");
        sendAccountStatement()
    })
});
function sendAccountStatement() {
    var b;
    if ($("#cust-acc-history-rewards").hasClass("active")) {
        b = 1
    } else {
        if ($("#cust-acc-history-fuel").hasClass("active")) {
            b = 2
        } else {
            if ($("#cust-acc-history-meal").hasClass("active")) {
                b = 3
            } else {
                if ($("#cust-acc-history-gift").hasClass("active")) {
                    b = 4
                } else {
                    showReportPageErrorMessage("gen-pdf-err-succ-msg-id", messageVal);
                    $("#gen-acc-statement-link-loader").addClass("hide");
                    $("#gen-acc-statement-link").show();
                    return false
                }
            }
        }
    }
    var c = {
        accountType: b
    };
    var a;
    $.ajax({
        url: "/sendAccountStatement",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(e) {
            var g = JSON.stringify(e);
            var d = $.parseJSON(g);
            var f = d.status;
            var h = d.message;
            if (f == 1) {
                showReportPageSuccessMessage("gen-pdf-err-succ-msg-id", h)
            } else {
                showReportPageErrorMessage("gen-pdf-err-succ-msg-id", h)
            }
            $("#gen-acc-statement-link").show();
            $("#gen-acc-statement-link-loader").addClass("hide")
        },
        error: function(d) {
            window.location.href = window.location.pathname
        }
    })
}
function populateGiftOrderJsonList(a) {
    var c = JSON.parse(a);
    for (var b in c) {
        orderWiseGiftDetail = c[b]
    }
}
function populateCustomerVoucherJson(c) {
    var a = JSON.parse(c);
    for (var b in a) {
        customerVoucherList = a[b]
    }
}
function checkShareStatus(c, a, b) {
    hideSocialShareLoader(a);
    if (c) {
        showReportPageSuccessMessage("cust-gift-share-msgId", "Greeting shared successfully");
        var d;
        $.each(orderWiseGiftDetail, function(e) {
            $.each(orderWiseGiftDetail[e], function(h, f) {
                var g = orderWiseGiftDetail[e].orderId;
                if (parseInt(g) == parseInt(a)) {
                    d = orderWiseGiftDetail[e];
                    return false
                }
            })
        });
        if ((b == 1 && !d.giftSharedOnFacebook) || (b == 3 && !d.giftSharedOnTwitter)) {
            markSocialShareStatus(b, a)
        }
    } else {
        if (b == 1) {
            showReportPageErrorMessage("cust-gift-share-msgId", "Unable to connect Facebook. Please try again")
        } else {
            if (b == 3) {
                showReportPageErrorMessage("cust-gift-share-msgId", "Unable to connect Twitter. Please try again")
            } else {
                showReportPageErrorMessage("cust-gift-share-msgId", "Greeting sharing failed. Please try again")
            }
        }
    }
    $("html, body").animate({
        scrollTop: $(".main-header").offset().top
    }, 1000)
}
function customerOrderDetail(b, d) {
    var c = {
        orderSummaryId: b
    };
    var a;
    $("#order-ajax-loader-div-" + b).show();
    $.ajax({
        url: "/orderDetail",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(g) {
            var p = JSON.stringify(g);
            var e = $.parseJSON(p);
            var n = e.status;
            var q = e.message;
            if (n == 1) {
                var k = e.customerOrderDetailDTO;
                $("#order-id").text("Reference No : " + k.orderId);
                var f = "Placed on " + k.orderDate;
                $("#order-date-time").text(f);
                if (isValidString(k.giftedToName)) {
                    $("#order-popup-gift-detail-div").show();
                    $("#order-popup-giftee-name").text(k.giftedToName);
                    $("#order-popup-giftee-mobile").text(k.giftedToMobileNumber);
                    if (isValidString(k.occasion)) {
                        $("#order-popup-gift-occasion").text(k.occasion);
                        $("#order-popup-gift-occasion-div").show()
                    } else {
                        $("#order-popup-gift-occasion").text("");
                        $("#order-popup-gift-occasion-div").hide()
                    }
                    $("#order-popup-gift-type").text(k.giftType);
                    if (isValidString(k.scheduledOn)) {
                        $("#order-popup-gift-date").text(k.scheduledOn);
                        $("#order-popup-gift-date-div").show()
                    } else {
                        $("#order-popup-gift-date").text("");
                        $("#order-popup-gift-date-div").hide()
                    }
                    $("#order-popup-gift-detail-hr-div").show()
                } else {
                    $("#order-popup-gift-detail-hr-div").hide();
                    $("#order-popup-giftee-name").text("");
                    $("#order-popup-giftee-mobile").text("");
                    $("#order-popup-gift-date").text("");
                    $("#order-popup-gift-type").text("");
                    $("#order-popup-gift-occasion").text("");
                    $("#order-popup-gift-detail-div").hide()
                }
                var r = k.orderItem;
                if (r && r.length > 0) {
                    $("#order-popup-voucher-detail-div").show();
                    $("#order-popup-scheme-detail-hr-div").show();
                    $("#order-popup-payment-mode-div").show();
                    $("#order-popup-payment-mode-hr-div").show();
                    $("#order-popup-scheme-detail").show();
                    $("#order-popup-scheme-detail-header").show();
                    $("#order-popup-payment-detail").show();
                    var j = $("#order-popup-scheme-detail-div");
                    var m = "order-popup-scheme-detail-header-div";
                    var h = $("#order-popup-scheme-detail-header").clone().prop({
                        id: m
                    });
                    j.text("");
                    j.append(h);
                    $.each(k.orderItem, function(t) {
                        var s = k.orderItem[t];
                        var w = "scheme-detail-row" + t;
                        var u = $("#order-popup-scheme-detail").clone().prop({
                            id: w
                        });
                        u.find("div#order-popup-scheme-name").text(s.schemeName);
                        u.find("div#order-popup-denomination").text("");
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(s.denomination) + " x " + s.quantity
                        }, u.find("div#order-popup-denomination"));
                        if (s.discountAmount && s.discountAmount > 0) {
                            u.find("div#order-popup-discount").text("");
                            createDynamicElement({
                                tag: "i",
                                "class": "fa fa-inr",
                                parentText: getAmountInRupeeToDisplay(s.discountAmount)
                            }, u.find("div#order-popup-discount"))
                        } else {
                            u.find("div#order-popup-discount").text("");
                            createDynamicElement({
                                tag: "i",
                                "class": "fa fa-inr",
                                parentText: 0
                            }, u.find("div#order-popup-discount"))
                        }
                        var v = "";
                        if (s.handlingCharges && s.handlingCharges > 0) {
                            u.find("div#order-popup-handling-charge").text("");
                            createDynamicElement({
                                tag: "i",
                                "class": "fa fa-inr",
                                parentText: getAmountInRupeeToDisplay(s.handlingCharges)
                            }, u.find("div#order-popup-handling-charge"))
                        } else {
                            u.find("div#order-popup-handling-charge").text("");
                            createDynamicElement({
                                tag: "i",
                                "class": "fa fa-inr",
                                parentText: 0
                            }, u.find("div#order-popup-handling-charge"))
                        }
                        j.append(u)
                    });
                    var o = $("#order-popup-payment-detail-div");
                    o.text("");
                    if (k.amountPaidByPinePerksWallet && k.amountPaidByPinePerksWallet > 0) {
                        var i = "order-popup-payment-detail-rewards";
                        var l = $("#order-popup-payment-detail").clone().prop({
                            id: i
                        });
                        l.find("div#order-popup-payment-mode-name").text("Rewards Wallet");
                        l.find("div#order-popup-payment-mode-amount").text("");
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(k.amountPaidByPinePerksWallet)
                        }, l.find("div#order-popup-payment-mode-amount"));
                        o.append(l)
                    }
                    if (k.amountPaidByFoodWallet && k.amountPaidByFoodWallet > 0) {
                        var i = "order-popup-payment-detail-meal";
                        var l = $("#order-popup-payment-detail").clone().prop({
                            id: i
                        });
                        l.find("div#order-popup-payment-mode-name").text("Meal Wallet");
                        l.find("div#order-popup-payment-mode-amount").text("");
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(k.amountPaidByFoodWallet)
                        }, l.find("div#order-popup-payment-mode-amount"));
                        o.append(l)
                    }
                    if (k.amountPaidByFuelWallet && k.amountPaidByFuelWallet > 0) {
                        var i = "order-popup-payment-detail-fuel";
                        var l = $("#order-popup-payment-detail").clone().prop({
                            id: i
                        });
                        l.find("div#order-popup-payment-mode-name").text("Fuel Wallet");
                        l.find("div#order-popup-payment-mode-amount").text("");
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(k.amountPaidByFuelWallet)
                        }, l.find("div#order-popup-payment-mode-amount"));
                        o.append(l)
                    }
                    if (k.amountPaidByPrepaidWallet && k.amountPaidByPrepaidWallet > 0) {
                        var i = "order-popup-payment-detail-gift";
                        var l = $("#order-popup-payment-detail").clone().prop({
                            id: i
                        });
                        l.find("div#order-popup-payment-mode-name").text("Pine Wallet");
                        l.find("div#order-popup-payment-mode-amount").text("");
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(k.amountPaidByPrepaidWallet)
                        }, l.find("div#order-popup-payment-mode-amount"));
                        o.append(l)
                    }
                    if (k.amountPaidByGiftCard && k.amountPaidByGiftCard > 0) {
                        var i = "order-popup-payment-detail-gift-card";
                        var l = $("#order-popup-payment-detail").clone().prop({
                            id: i
                        });
                        l.find("div#order-popup-payment-mode-name").text("Gift Card");
                        l.find("div#order-popup-payment-mode-amount").text("");
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(k.amountPaidByGiftCard)
                        }, l.find("div#order-popup-payment-mode-amount"));
                        o.append(l)
                    }
                    if (k.amountPaidByPaymentGateway && k.amountPaidByPaymentGateway > 0) {
                        var i = "order-popup-payment-detail-pg";
                        var l = $("#order-popup-payment-detail").clone().prop({
                            id: i
                        });
                        l.find("div#order-popup-payment-mode-name").text("Card/Net Banking");
                        l.find("div#order-popup-payment-mode-amount").text("");
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(k.amountPaidByPaymentGateway)
                        }, l.find("div#order-popup-payment-mode-amount"));
                        o.append(l)
                    }
                    $("#order-popup-scheme-detail").hide();
                    $("#order-popup-scheme-detail-header").hide();
                    $("#order-popup-payment-detail").hide()
                } else {
                    $("#order-popup-scheme-detail-div").text("");
                    $("#order-popup-voucher-detail-div").hide();
                    $("#order-popup-scheme-detail-hr-div").hide();
                    $("#order-popup-payment-detail-div").text("");
                    $("#order-popup-payment-mode-div").hide();
                    $("#order-popup-payment-mode-hr-div").hide()
                }
                if (k.netOrderAmount && k.netOrderAmount > 0) {
                    $("#order-total-amount").text("");
                    createDynamicElement({
                        tag: "i",
                        "class": "fa fa-inr",
                        parentText: getAmountInRupeeToDisplay(k.netOrderAmount)
                    }, $("#order-total-amount"))
                } else {
                    $("#order-total-amount").text("");
                    createDynamicElement({
                        tag: "i",
                        "class": "fa fa-inr",
                        parentText: 0
                    }, $("#order-total-amount"))
                }
                $("#customer-order-popup-div").css("visibility", "visible")
            } else {
                showCustomerPopup(q)
            }
            $("#order-ajax-loader-div-" + b).hide();
            $("#" + d).show()
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function viewReceivedGiftDetail(b) {
    var c = {
        orderSummaryId: b
    };
    var a;
    $.ajax({
        url: "/giftDetail",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var l = JSON.stringify(f);
            var d = $.parseJSON(l);
            var k = d.status;
            var m = d.message;
            if (k == 1) {
                var i = d.customerOrderDetailDTO;
                var e = "Gifted on " + i.orderDate;
                $("#order-date-time-received-gift").text(e);
                $("#order-popup-received-gift-detail-div").show();
                if (isValidString(i.giftedByName)) {
                    $("#order-popup-gifter-name").text(i.giftedByName)
                } else {
                    $("#order-popup-gifter-name").text("")
                }
                $("#order-popup-received-gift-type").text(i.giftType);
                if (isValidString(i.occasion)) {
                    $("#order-popup-received-gift-occasion").text(i.occasion);
                    $("#order-popup-received-gift-occasion-div").show()
                } else {
                    $("#order-popup-received-gift-occasion").text("");
                    $("#order-popup-received-gift-occasion-div").hide()
                }
                if (isValidString(i.netOrderAmount) && parseFloat(i.netOrderAmount) > 0) {
                    createDynamicElement({
                        tag: "i",
                        "class": "fa fa-inr",
                        parentText: getAmountInRupeeToDisplay(i.netOrderAmount),
                        replace: true
                    }, $("#order-popup-received-gift-amount"));
                    $("#order-popup-received-gift-amount-div").show()
                } else {
                    $("#order-popup-received-gift-amount").text("");
                    $("#order-popup-received-gift-amount-div").hide()
                }
                $("#order-popup-received-gift-detail-hr-div").show();
                var n = i.orderItem;
                if (n && n.length > 0) {
                    $("#order-popup-received-gift-scheme-detail-header").show();
                    $("#order-popup-received-gift-scheme-detail").show();
                    var h = $("#order-popup-received-scheme-detail-div");
                    var j = "order-popup-received-gift-scheme-detail-header-div";
                    var g = $("#order-popup-received-gift-scheme-detail-header").clone().prop({
                        id: j
                    });
                    h.text("");
                    h.append(g);
                    $.each(i.orderItem, function(p) {
                        var o = i.orderItem[p];
                        var r = "received-gift-scheme-detail-row" + p;
                        var q = $("#order-popup-received-gift-scheme-detail").clone().prop({
                            id: r
                        });
                        q.find("div#order-popup-received-gift-scheme-name").text(o.schemeName);
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(o.denomination) + " x " + o.quantity,
                            replace: true
                        }, q.find("div#order-popup-received-gift-denomination"));
                        h.append(q)
                    });
                    $("#order-popup-received-gift-scheme-detail-header").hide();
                    $("#order-popup-received-gift-scheme-detail").hide();
                    $("#order-popup-received-voucher-detail-div").show()
                } else {
                    $("#order-popup-received-scheme-detail-div").text("");
                    $("#order-popup-received-voucher-detail-div").hide();
                    $("#order-popup-received-gift-detail-hr-div").hide()
                }
                $("#customer-received-gift-popup-div").css("visibility", "visible")
            } else {
                showCustomerPopup(m)
            }
        },
        error: function(d) {
            window.location.href = window.location.pathname
        }
    })
}
function viewSentGiftDetail(b) {
    var c = {
        orderSummaryId: b
    };
    var a;
    $.ajax({
        url: "/giftDetail",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var l = JSON.stringify(f);
            var d = $.parseJSON(l);
            var k = d.status;
            var m = d.message;
            if (k == 1) {
                var i = d.customerOrderDetailDTO;
                $("#order-id").text("Reference No : " + i.orderId);
                var e = "Placed on " + i.orderDate;
                $("#order-date-time").text(e);
                $("#order-popup-gift-detail-div").show();
                $("#order-popup-giftee-name").text(i.giftedToName);
                $("#order-popup-giftee-mobile").text(i.giftedToMobileNumber);
                $("#order-popup-gift-type").text(i.giftType);
                if (isValidString(i.occasion)) {
                    $("#order-popup-gift-occasion").text(i.occasion);
                    $("#order-popup-sent-gift-occasion-div").show()
                } else {
                    $("#order-popup-gift-occasion").text("");
                    $("#order-popup-sent-gift-occasion-div").hide()
                }
                if (isValidString(i.scheduledOn)) {
                    $("#order-popup-gift-date").text(i.scheduledOn);
                    $("#order-popup-gift-date-div").show()
                } else {
                    $("#order-popup-gift-date").text("");
                    $("#order-popup-gift-date-div").hide()
                }
                $("#order-popup-gift-detail-hr-div").show();
                var n = i.orderItem;
                if (n && n.length > 0) {
                    $("#order-popup-scheme-detail").show();
                    $("#order-popup-scheme-detail-header").show();
                    var h = $("#order-popup-scheme-detail-div");
                    var j = "order-popup-scheme-detail-header-div";
                    var g = $("#order-popup-scheme-detail-header").clone().prop({
                        id: j
                    });
                    h.text("");
                    h.append(g);
                    $.each(i.orderItem, function(p) {
                        var o = i.orderItem[p];
                        var t = "scheme-detail-row" + p;
                        var r = $("#order-popup-scheme-detail").clone().prop({
                            id: t
                        });
                        r.find("div#order-popup-scheme-name").text(o.schemeName);
                        createDynamicElement({
                            tag: "i",
                            "class": "fa fa-inr",
                            parentText: getAmountInRupeeToDisplay(o.denomination) + " x " + o.quantity,
                            replace: true
                        }, r.find("div#order-popup-denomination"));
                        var q = "";
                        if (o.discountAmount && o.discountAmount > 0) {
                            createDynamicElement({
                                tag: "i",
                                "class": "fa fa-inr",
                                parentText: getAmountInRupeeToDisplay(o.discountAmount),
                                replace: true
                            }, r.find("div#order-popup-discount"))
                        } else {
                            createDynamicElement({
                                tag: "i",
                                "class": "fa fa-inr",
                                parentText: 0,
                                replace: true
                            }, r.find("div#order-popup-discount"))
                        }
                        var s = "";
                        if (o.handlingCharges && o.handlingCharges > 0) {
                            createDynamicElement({
                                tag: "i",
                                "class": "fa fa-inr",
                                parentText: getAmountInRupeeToDisplay(o.handlingCharges),
                                replace: true
                            }, r.find("div#order-popup-handling-charge"))
                        } else {
                            createDynamicElement({
                                tag: "i",
                                "class": "fa fa-inr",
                                parentText: 0,
                                replace: true
                            }, r.find("div#order-popup-handling-charge"))
                        }
                        h.append(r)
                    });
                    $("#order-popup-scheme-detail").hide();
                    $("#order-popup-scheme-detail-header").hide();
                    $("#order-popup-voucher-detail-div").show()
                } else {
                    $("#order-popup-scheme-detail-div").text("");
                    $("#order-popup-voucher-detail-div").hide();
                    $("#order-popup-gift-detail-hr-div").hide()
                }
                $("#customer-sent-gift-popup-div").css("visibility", "visible")
            } else {
                showCustomerPopup(m)
            }
        },
        error: function(d) {
            window.location.href = window.location.pathname
        }
    })
}
function sendThankuNote(b) {
    var d = $("#cust-thanku-note").val();
    if (!isValidAddress(d)) {
        showReportPageErrorMessage("cust-thanku-note-popup-error", "Please enter valid message");
        $("#cust-thanku-note-btn").removeAttr("disabled");
        return false
    }
    var e;
    $.each(orderWiseGiftDetail, function(f) {
        $.each(orderWiseGiftDetail[f], function(i, h) {
            var g = orderWiseGiftDetail[f].orderId;
            if (parseInt(g) == parseInt(b)) {
                e = orderWiseGiftDetail[f];
                return false
            }
        })
    });
    if (e.thankuNoteSent) {
        showReportPageErrorMessage("cust-thanku-note-popup-error", "Message already sent");
        $("#cust-thanku-note-btn").removeAttr("disabled");
        return false
    }
    var c = {
        orderSummaryId: b,
        returnMessage: d
    };
    var a;
    $.ajax({
        url: "/sendThankuNote",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(i) {
            var m = JSON.stringify(i);
            var g = $.parseJSON(m);
            var k = g.status;
            var n = g.message;
            if (k == 1) {
                e.thankuNoteSent = true;
                e.thankuNoteToView = d;
                var f = "cust-say-thanku-link-" + b;
                var l = $("#" + f).find("img").attr("src");
                l = l.replace("say-thankyou.png", "response-sent.png");
                var o = document.createElement("img");
                o.setAttribute("src", l);
                $("#" + f)[0].appendChild(o);
                var j = document.createElement("br");
                $("#" + f)[0].appendChild(tag1);
                var h = document.createTextNode("Response Sent");
                $("#" + f)[0].appendChild(h);
                removeReportPageErrorMessage();
                $("#cust-thanku-note").val("");
                $("#cust-thanku-note-popup-div").css("visibility", "hidden")
            } else {
                showReportPageErrorMessage("cust-thanku-note-popup-error", n);
                $("#cust-thanku-note-btn").removeAttr("disabled")
            }
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function showThankuResponseMessage(a) {
    $("#cust-thanku-note-popup-div").css("visibility", "visible");
    $("#cust-thanku-note").val(a);
    $("#cust-thanku-note-btn").hide()
}
function markGreetingViewed(b) {
    var c = {
        orderSummaryId: b
    };
    var a;
    $.ajax({
        url: "/greetingViewed",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var g = JSON.stringify(f);
            var e = $.parseJSON(g);
            var d = e.status;
            var i = e.message;
            var h;
            $.each(orderWiseGiftDetail, function(j) {
                $.each(orderWiseGiftDetail[j], function(m, l) {
                    var k = orderWiseGiftDetail[j].orderId;
                    if (parseInt(k) == parseInt(b)) {
                        h = orderWiseGiftDetail[j];
                        return false
                    }
                })
            });
            if (d == 1) {
                h.giftViewed = true
            } else {
                h.giftViewed = false
            }
        },
        error: function(d) {
            window.location.href = window.location.pathname
        }
    })
}
function markSocialShareStatus(b, d) {
    var a = {
        orderSummaryId: d,
        socialNetworkingSite: b
    };
    var c;
    $.ajax({
        url: "/greetingShared",
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(g) {
            var h = JSON.stringify(g);
            var f = $.parseJSON(h);
            var e = f.status;
            var j = f.message;
            var i;
            $.each(orderWiseGiftDetail, function(k) {
                $.each(orderWiseGiftDetail[k], function(n, m) {
                    var l = orderWiseGiftDetail[k].orderId;
                    if (parseInt(l) == parseInt(d)) {
                        i = orderWiseGiftDetail[k];
                        return false
                    }
                })
            });
            if (e == 1) {
                if (b == 1) {
                    i.giftSharedOnFacebook = true
                } else {
                    if (b == 3) {
                        i.giftSharedOnTwitter = true
                    }
                }
            }
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function showGreetingImagePopup(a) {
    $("#gift-greeting-imageid").attr("src", a);
    $("#greeting-image-popup-div").css("visibility", "visible")
}
function showCustomerAccountHistory(c) {
    enableActiveClassOnSelectedLink(c);
    var a = "acc-history-" + c + "-";
    $("#acc-history-empty").hide();
    $('[id^="acc-history-"]').hide();
    $(".table-responsive.account-balance-table").show();
    $('[id^="' + a + '"]').show();
    $("#acc-hist-record-duration").show();
    $("#acc-statement-div").show();
    var b = $('[id^="acc-history-' + c + '-"]');
    if (!(b && b.length)) {
        $(".table-responsive.account-balance-table").hide();
        $("#acc-hist-record-duration").hide();
        $("#acc-statement-div").hide();
        $("#acc-history-empty").show();
        if (c == 4) {
            $("#no-transaction-rewards-meal-fuel-wallet").hide();
            $("#no-transaction-pine-wallet").show()
        } else {
            $("#no-transaction-pine-wallet").hide();
            $("#no-transaction-rewards-meal-fuel-wallet").show()
        }
    }
}
function enableActiveClassOnSelectedLink(a) {
    removeReportPageErrorMessage();
    $('[id*="cust-acc-history-"]').each(function() {
        $(this).removeClass("active")
    });
    $('[id^="acc-bal-"]').hide();
    if (a == 1) {
        $("#cust-acc-history-rewards").addClass("active");
        $("#acc-bal-rewards").show()
    } else {
        if (a == 2) {
            $("#cust-acc-history-fuel").addClass("active");
            $("#acc-bal-fuel").show()
        } else {
            if (a == 3) {
                $("#cust-acc-history-meal").addClass("active");
                $("#acc-bal-meal").show()
            } else {
                if (a == 4) {
                    $("#cust-acc-history-gift").addClass("active");
                    $("#acc-bal-gift").show()
                }
            }
        }
    }
}
function showBrandVoucherLink() {
    $("#no-brand-voucher-found").hide();
    $("#no-voucher-found").hide();
    $("#voucher-div-table").show();
    $("#cust-regenerate-voucher-otp").show();
    $('[id^="brand-used-voucher-"]').hide();
    $('[id^="brand-voucher-"]').show();
    var a = $('[id^="brand-voucher-"]');
    if (!(a && a.length)) {
        $("#voucher-div-table").hide();
        $("#no-vucher-found-text").text("You don't have any vouchers yet");
        $("#no-voucher-found").show()
    }
    $("#used-brand-voucher-link").removeClass("active");
    $("#unused-brand-voucher-link").addClass("active")
}
function showUsedVoucherLink() {
    $("#no-brand-voucher-found").hide();
    $("#no-voucher-found").hide();
    $("#voucher-div-table").show();
    $("#cust-regenerate-voucher-otp").hide();
    $('[id^="brand-voucher-"]').hide();
    $('[id^="brand-used-voucher-"]').show();
    var a = $('[id^="brand-used-voucher-"]');
    if (!(a && a.length)) {
        $("#voucher-div-table").hide();
        $("#no-vucher-found-text").text("You don't have any used vouchers yet");
        $("#no-voucher-found").show()
    }
    $("#used-brand-voucher-link").addClass("active");
    $("#unused-brand-voucher-link").removeClass("active")
}
function markVoucher(a, d) {
    removeReportPageErrorMessage();
    var c;
    var f;
    if (a) {
        c = "mark-voucher-used-ajax-loader-" + d;
        f = "mark-voucher-used-" + d
    } else {
        c = "mark-voucher-unused-ajax-loader-" + d;
        f = "mark-voucher-unused-" + d
    }
    $("#" + c).show();
    var e = {
        voucherRedeemed: a,
        voucherId: d
    };
    var b;
    $.ajax({
        url: "/markVoucherUsedUnused",
        type: "POST",
        async: true,
        data: JSON.stringify(e),
        dataType: "json",
        contentType: "application/json",
        success: function(i) {
            var j = JSON.stringify(i);
            var h = $.parseJSON(j);
            var g = h.status;
            var l = h.message;
            if (g == 1) {
                var k = window.location.pathname;
                voucherMarkedUnmarkedSuccess(k, l)
            } else {
                $("#" + c).hide();
                $("#" + f).show();
                showReportPageErrorMessage("cust-voucher-mark-msgId", l)
            }
        },
        error: function(g) {
            window.location.href = window.location.pathname
        }
    })
}
function voucherMarkedUnmarkedSuccess(d, e) {
    var c = document.createElement("form");
    c.setAttribute("method", "POST");
    c.setAttribute("action", d);
    var a = document.createElement("input");
    a.setAttribute("type", "hidden");
    a.setAttribute("name", "message");
    a.setAttribute("value", e);
    c.appendChild(a);
    var b = $("#csrfToken").val();
    var a = document.createElement("input");
    a.setAttribute("type", "hidden");
    a.setAttribute("name", "csrfToken");
    a.setAttribute("value", b);
    c.appendChild(a);
    document.body.appendChild(c);
    c.submit()
}
function confirmBoxOperation(a, b) {
    if (a) {
        regenearteVoucherOTP()
    }
}
function regenearteVoucherOTP() {
    removeReportPageErrorMessage();
    $("#cust-regenerate-voucher-otp").hide();
    $("#cust-regenerate-voucher-otp-ajax-loader").show();
    var b = {};
    var a;
    $.ajax({
        url: "/generateVoucherOTP",
        type: "POST",
        async: true,
        data: JSON.stringify(b),
        dataType: "json",
        contentType: "application/json",
        success: function(d) {
            var e = JSON.stringify(d);
            var c = $.parseJSON(e);
            $("#cust-regenerate-voucher-otp-ajax-loader").hide();
            $("#cust-regenerate-voucher-otp").show();
            showCustomerPopup(c.message)
        },
        error: function(c) {
            window.location.href = window.location.pathname
        }
    })
}
function emailVoucherDetail(d, b) {
    var c = {
        voucherId: d,
        thirdPartyVoucher: b
    };
    var a;
    $('[id^="voucher-detail-email-' + d + '"]').hide();
    $("#voucher-ajax-loader-email-" + d).show();
    $.ajax({
        url: "/generateVoucherPDF",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var h = JSON.stringify(f);
            var e = $.parseJSON(h);
            var g = e.status;
            var i = e.message;
            if (g == 1) {
                showReportPageSuccessMessage("cust-voucher-mark-msgId", i)
            } else {
                showReportPageErrorMessage("cust-voucher-mark-msgId", i)
            }
            $("#voucher-ajax-loader-email-" + d).hide();
            $('[id^="voucher-detail-email-' + d + '"]').show();
            $("html, body").animate({
                scrollTop: $(".tab-content").offset().top
            }, 1000)
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function smsVoucherDetail(d, c) {
    var a = {
        voucherId: d,
        thirdPartyVoucher: c
    };
    var b;
    $('[id^="voucher-detail-sms-' + d + '"]').hide();
    $("#voucher-ajax-loader-sms-" + d).show();
    $.ajax({
        url: "/smsVoucherDetail",
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var h = JSON.stringify(f);
            var e = $.parseJSON(h);
            var g = e.status;
            var i = e.message;
            $("#voucher-ajax-loader-sms-" + d).hide();
            if (g == 1 || g == 11) {
                showReportPageSuccessMessage("cust-voucher-mark-msgId", i);
                if (g == 11) {
                    $('[id^="voucher-detail-sms-' + d + '"]').hide();
                    $('<span style="margin-right: 16px;">&nbsp;</span>').insertBefore($('[id^="voucher-detail-email-' + d + '"]'))
                } else {
                    $('[id^="voucher-detail-sms-' + d + '"]').show()
                }
            } else {
                $('[id^="voucher-detail-sms-' + d + '"]').show();
                showReportPageErrorMessage("cust-voucher-mark-msgId", i)
            }
            $("html, body").animate({
                scrollTop: $(".tab-content").offset().top
            }, 1000)
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function removeReportPageErrorMessage() {
    $(".error-msg").text("Message");
    $(".error-msg").removeClass("is-visible");
    $(".success-msg").text("Message");
    $(".success-msg").removeClass("is-visible")
}
function showReportPageErrorMessage(b, a) {
    $("#" + b).text(a);
    $("#" + b).removeClass("success-msg");
    $("#" + b).addClass("error-msg");
    $("#" + b).addClass("is-visible")
}
function showReportPageSuccessMessage(b, a) {
    $("#" + b).text(a);
    $("#" + b).removeClass("error-msg");
    $("#" + b).addClass("success-msg");
    $("#" + b).addClass("is-visible")
}
function showSocialShareLoader(a) {
    $("#received-gift-share-btn-" + a).parent().removeClass("open");
    $("#received-gift-share-btn-" + a).attr("aria-expanded", false);
    $("#received-gift-share-btn-" + a).hide();
    $("#share-ajax-loader-" + a).show()
}
function hideSocialShareLoader(a) {
    $("#received-gift-share-btn-" + a).show();
    $("#share-ajax-loader-" + a).hide()
}
;
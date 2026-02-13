var modulus;
var exponent;
var cardActivityType;
var isMobileCard;
jQuery(document).ready(function(a) {
    a(".error-msg").removeClass("is-visible");
    a(document).on("keydown", "#cust-card-number, #cust-card-cvv, #cust-card-activation-otp, #cust-card-activation-pin, #cust-card-bl-unb-otp, #ecommRedeemTransactionLimit, #posRedeemTransactionLimit", function(c) {
        var b = c.keyCode || c.which;
        if (c.shiftKey || !((b >= "48" && b <= "57") || (b >= "96" && b <= "105") || b == "8" || b == "9" || b == "37" || b == "39" || b == "46")) {
            return false
        }
    });
    a(document).on("keypress", 'input[type="text"], input[type="password"]', function() {
        clearCardActivationErrorMsg()
    });
    a(document).on("change", "#cust-card-exp-month, #cust-card-exp-year, #cust-kyc-doc-type", function() {
        clearCardActivationErrorMsg()
    });
    a(document).on("click", 'input[type="checkbox"], input[type="button"], #change-cust-card-pin', function() {
        clearCardActivationErrorMsg()
    });
    a(document).on("click", "#change-cust-card-pin", function() {
        window.location.href = "/changePin"
    });
    a(document).on("click", "#cust-card-bl-unb-otp-btn", function() {
        a("#cust-card-bl-unb-otp-btn").attr("disabled", "disabled");
        blockUnblockCard()
    });
    a(document).on("click", "#cust-add-card-btn, #cust-add-more-card-btn", function() {
        a("#cust-add-card-btn").attr("disabled", "disabled");
        a("#cust-add-more-card-btn").attr("disabled", "disabled");
        window.location.href = "/addCard"
    });
    a(document).on("click", "#save-cust-card-btn", function() {
        a("#save-cust-card-btn").attr("disabled", "disabled");
        saveCustomerCard()
    });
    a(document).on("click", "#change-cust-card-pin-btn", function() {
        a("#change-cust-card-pin-btn").attr("disabled", "disabled");
        saveCustomerCard()
    });
    a(document).on("click", "#cust-card-activation-resend-otp", function() {
        a("#cust-card-activation-resend-otp").hide();
        resendCardActivationOtp()
    });
    a(document).on("click", "#cust-card-activation-otp-close-btn", function() {
        clearCardActivationErrorMsg();
        a("#cust-card-activation-otp").val("");
        a("#cust-card-activation-otp-btn").removeAttr("disabled");
        a("#cust-card-activation-otp-popup").css("visibility", "hidden")
    });
    a(document).on("click", "#cust-card-activation-otp-btn", function() {
        a("#cust-card-activation-otp-btn").attr("disabled", "disabled");
        verifyCustomerCardOTP()
    });
    a(document).on("click", "#cust-card-activation-set-pin-btn", function() {
        a("#cust-card-activation-set-pin-btn").attr("disabled", "disabled");
        setCustomerCardPin()
    });
    a(document).on("click", "#back-to-managecard-link", function() {
        a("#rupaycardid").val("");
        a("#isEcommTransactionEnabled").prop("checked", false);
        a("#ecommRedeemTransactionLimit").val("");
        a("#isPOSTransactionEnabled").prop("checked", false);
        a("#posRedeemTransactionLimit").val("");
        a("#isATMTransactionEnabled").prop("checked", false);
        a("#cashWithdrawalOnATMLimit").val("");
        a("#active-cards-div").show();
        a("#rupaycard-detail-div").hide()
    });
    a(document).on("click", "#rupay-reload-btn", function() {
        a("#rupay-reload-btn").attr("disabled", "disabled");
        submitCardLimit()
    })
});
function setModulusExponentAndCardActivityType(b, c, a) {
    modulus = JSON.parse(b);
    exponent = JSON.parse(c);
    cardActivityType = a
}
function saveCustomerCard() {
    var j = $("#cust-card-number").val();
    var h = $("#cust-card-exp-month").val();
    var g = $("#cust-card-exp-year").val();
    var d = $("#cust-card-cvv").val();
    if (!(isValidString(j) && parseInt(j) > 0 && j.length >= 16 && j.length <= 19)) {
        showCardActvationErrorMessage("cust-card-activation-error", "Please enter valid card number");
        $("#save-cust-card-btn").removeAttr("disabled");
        $("#change-cust-card-pin-btn").removeAttr("disabled");
        return false
    }
    if (!(isValidString(d) && !isNaN(d) && d.length == 3)) {
        showCardActvationErrorMessage("cust-card-activation-error", "Please enter valid cvv");
        $("#save-cust-card-btn").removeAttr("disabled");
        $("#change-cust-card-pin-btn").removeAttr("disabled");
        return false
    }
    var b = new Date();
    if (!isValidString(h) || parseInt(h) < 1 || parseInt(h) > 12) {
        showCardActvationErrorMessage("cust-card-activation-error", "Please enter valid card expiry month");
        $("#save-cust-card-btn").removeAttr("disabled");
        $("#change-cust-card-pin-btn").removeAttr("disabled");
        return false
    }
    if (!(isValidString(g) && parseInt(g) > 0)) {
        showCardActvationErrorMessage("cust-card-activation-error", "Please enter valid card expiry year");
        $("#save-cust-card-btn").removeAttr("disabled");
        $("#change-cust-card-pin-btn").removeAttr("disabled");
        return false
    }
    if (parseInt(g) < b.getFullYear()) {
        showCardActvationErrorMessage("cust-card-activation-error", "Please enter valid card expiry year");
        $("#save-cust-card-btn").removeAttr("disabled");
        $("#change-cust-card-pin-btn").removeAttr("disabled");
        return false
    }
    if (parseInt(g) == b.getFullYear()) {
        if (parseInt(h) < (b.getMonth() + 1)) {
            showCardActvationErrorMessage("cust-card-activation-error", "Please enter valid card expiry date");
            $("#save-cust-card-btn").removeAttr("disabled");
            $("#change-cust-card-pin-btn").removeAttr("disabled");
            return false
        }
    }
    var f = g.substring(2);
    if (parseInt(h) < 10) {
        h = "0" + h
    }
    var i = f.concat(h);
    var a = processCardData(modulus, exponent, j, d, i);
    var e = {
        encryptedCardPAN: a.eCardPAN,
        encryptedCVV: a.eCVV,
        encryptedCardExpiry: a.eCardExpiry,
        cardActivityType: cardActivityType
    };
    var c;
    $.ajax({
        url: "/verifyCardDetail",
        type: "POST",
        async: true,
        data: JSON.stringify(e),
        dataType: "json",
        contentType: "application/json",
        success: function(l) {
            var m = JSON.stringify(l);
            var p = $.parseJSON(m);
            var k = p.status;
            var o = p.message;
            if (k == 1) {
                var n = p.otpSentTo;
                $("#cust-card-activation-otp-sentto").text(n);
                $("#cust-card-activation-otp-popup").css("visibility", "visible")
            } else {
                if (k == 3) {
                    window.location.href = window.location.pathname
                } else {
                    showCardActvationErrorMessage("cust-card-activation-error", o)
                }
            }
            $("#save-cust-card-btn").removeAttr("disabled");
            $("#change-cust-card-pin-btn").removeAttr("disabled")
        },
        error: function(k) {
            window.location.href = window.location.pathname
        }
    })
}
function resendCardActivationOtp() {
    $("#cust-card-activation-resend-otp-ajax-loader").show();
    var b = {};
    var a;
    $.ajax({
        url: "/verifyCardDetail/resendOTP",
        type: "POST",
        async: true,
        data: JSON.stringify(b),
        dataType: "json",
        contentType: "application/json",
        success: function(e) {
            var f = JSON.stringify(e);
            var d = $.parseJSON(f);
            var c = d.status;
            var g = d.message;
            if (c == 1) {
                showCardActvationSuccessMessage("cust-card-otp-error", g)
            } else {
                if (c == 3) {
                    window.location.href = window.location.pathname
                } else {
                    showCardActvationErrorMessage("cust-card-otp-error", g)
                }
            }
            $("#cust-card-activation-resend-otp-ajax-loader").hide();
            $("#cust-card-activation-resend-otp").show()
        },
        error: function(c) {
            window.location.href = window.location.pathname
        }
    })
}
function verifyCustomerCardOTP() {
    var a = $("#cust-card-activation-otp").val();
    if (!isValidOTP(a)) {
        showCardActvationErrorMessage("cust-card-otp-error", "Please enter valid OTP");
        $("#cust-card-activation-otp-btn").removeAttr("disabled");
        return false
    }
    var c = {
        otp: a,
        cardActivityType: cardActivityType
    };
    var b;
    $.ajax({
        url: "/verifyCardOtp",
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
            if (d == 1) {
                var h = "/cards";
                cardActivationSuccess(h, i)
            } else {
                if (d == 16) {
                    $("#cust-card-activation-add-card").hide();
                    $("#cust-card-activation-set-pin").show();
                    $("#cust-card-activation-otp-popup").css("visibility", "hidden");
                    clearCardActivationErrorMsg()
                } else {
                    if (d == 3) {
                        window.location.href = window.location.pathname
                    } else {
                        showCardActvationErrorMessage("cust-card-otp-error", i)
                    }
                }
            }
            $("#cust-card-activation-otp-btn").removeAttr("disabled")
        },
        error: function(d) {
            window.location.href = window.location.pathname
        }
    })
}
function setCustomerCardPin() {
    var d = $("#cust-card-activation-pin").val();
    if (!isValidPIN(d)) {
        showCardActvationErrorMessage("cust-card-set-pin-error", "Please enter valid PIN");
        $("#cust-card-activation-set-pin-btn").removeAttr("disabled");
        return false
    }
    var c = processVerifyCardPin(d, modulus, exponent);
    var b = {
        encryptedPIN: c.eData,
        cardActivityType: cardActivityType
    };
    var a;
    $.ajax({
        url: "/verifyCardPin",
        type: "POST",
        async: true,
        data: JSON.stringify(b),
        dataType: "json",
        contentType: "application/json",
        success: function(g) {
            var h = JSON.stringify(g);
            var f = $.parseJSON(h);
            var e = f.status;
            var j = f.message;
            if (e == 1) {
                var i = "/cards";
                cardActivationSuccess(i, j)
            } else {
                if (e == 3) {
                    window.location.href = window.location.pathname
                } else {
                    showCardActvationErrorMessage("cust-card-set-pin-error", j)
                }
            }
            $("#cust-card-activation-set-pin-btn").removeAttr("disabled")
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function cardActivationSuccess(d, e) {
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
function showCardActvationErrorMessage(a, b) {
    $("#" + a).removeClass("success-msg");
    $("#" + a).addClass("error-msg");
    $("#" + a).text(b);
    $("#" + a).addClass("is-visible")
}
function showCardActvationSuccessMessage(a, b) {
    $("#" + a).removeClass("error-msg");
    $("#" + a).addClass("success-msg");
    $("#" + a).text(b);
    $("#" + a).addClass("is-visible")
}
function clearCardActivationErrorMsg() {
    $(".error-msg").text("Message");
    $(".success-msg").text("Message");
    $(".error-msg").removeClass("is-visible");
    $(".success-msg").removeClass("is-visible")
}
;
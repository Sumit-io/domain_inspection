var formModal;
var formLogin;
var formSignup;
var formForgotPassword;
var formModalTab;
var tabLogin;
var tabSignup;
var forgotPasswordLink;
var backToLoginLink;
var mainNav;
var formLoginOTP;
var bottomMessageTab;
var loginWithOTP;
var externalRequest = false;
var storeLocatorBrandId = 0;
var cookieBlocked = false;
!function(h, a, i, c, j, d, g) {
    if (h.fbq) {
        return
    }
    j = h.fbq = function() {
        j.callMethod ? j.callMethod.apply(j, arguments) : j.queue.push(arguments)
    }
    ;
    if (!h._fbq) {
        h._fbq = j
    }
    j.push = j;
    j.loaded = !0;
    j.version = "2.0";
    j.queue = [];
    d = a.createElement(i);
    d.async = !0;
    d.src = c;
    g = a.getElementsByTagName(i)[0];
    g.parentNode.insertBefore(d, g)
}(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
fbq("init", "1378765822450658", {
    em: "insert_email_variable"
});
fbq("track", "PageView");
(function() {
    $('<script type="text/javascript">_linkedin_data_partner_id = "85183";<\/script>').insertBefore($("head script:first"));
    var c = document.getElementsByTagName("script")[0];
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;
    a.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    c.parentNode.insertBefore(a, c)
}
)();
jQuery(document).ready(function(b) {
    b('div:not(.user-tab-right-panel):not(.main-form):not(.mid-bg):has(> [class^="col-"]:not(.col-form-label):not(.user-tab-right-panel))').each(function() {
        b(this).removeClass(function(e, f) {
            return (f.match(/\bcol-\S+/g) || []).join(" ")
        });
        b(this).addClass("row")
    });
    b(".smlLoader").removeClass("hide");
    formModal = b(".cd-user-modal");
    formLogin = formModal.find("#cd-login");
    formLoginOTP = formModal.find("#cd-login-otp");
    formSignup = formModal.find("#cd-signup");
    formForgotPassword = formModal.find("#cd-reset-password");
    formModalTab = b(".cd-switcher");
    tabLogin = formModalTab.children("li").eq(0).children("a");
    tabSignup = formModalTab.children("li").eq(1).children("a");
    bottomMessageTab = formLogin.find(".cd-form-bottom-message");
    forgotPasswordLink = bottomMessageTab.children("a").eq(0);
    loginWithOTP = b("#si-via-otp-link");
    backToLoginLink = formForgotPassword.find(".cd-form-bottom-message a");
    mainNav = b(".navbar-nav");
    mainNav.on("click", function(e) {
        b(e.target).is(mainNav) && mainNav.children("ul").toggleClass("is-visible")
    });
    b(".dropdown-toggle").click(function(e) {
        if (b(e.currentTarget).hasClass("user dropdown-toggle") && !b(e.currentTarget).parent().hasClass("dropdown-content open")) {
            b(this).toggleClass("open");
            b(".dropdown-content").toggleClass("open");
            if (!b(e.target).parent().hasClass("cart")) {
                if (b(".addcart-popup").is(":visible")) {
                    b(".addcart-popup").hide()
                }
            }
            collapseWalletAmountMenu();
            return false
        }
    });
    b(document).on("click", "#wallet-drop-down-menu", function() {
        openWalletDropDownMenu()
    });
    b(document).on("click", "#mobile-user-link", function(f) {
        f.stopPropagation();
        f.preventDefault();
        openMobileUserMenu()
    });
    b(document).on("click", "#mobile-main-menu-button", function(f) {
        f.stopPropagation();
        f.preventDefault();
        openMobileMainMenu()
    });
    mainNav.on("click", ".cd-signin", login_selected);
    b(".cd-error-message").removeClass("is-visible");
    formModal.on("click", function(e) {
        if (b(e.target).is(formModal) || b(e.target).is(".cd-close-form")) {
            formLogin.removeClass("is-selected");
            formSignup.removeClass("is-selected");
            formForgotPassword.removeClass("is-selected");
            formLoginOTP.removeClass("is-selected");
            formModal.removeClass("is-visible")
        }
    });
    b(document).keyup(function(e) {
        if (e.which == "27") {
            closeInnerPagePopUp();
            b(".cd-close-form").trigger("click")
        }
    });
    formModalTab.on("click", function(e) {
        e.preventDefault();
        (b(e.target).is(tabLogin)) ? login_selected() : signup_selected()
    });
    b(".hide-password").on("click", function() {
        var e = b(this)
          , f = e.prev("input");
        ("password" == f.attr("type")) ? f.attr("type", "text") : f.attr("type", "password");
        ("Show" == e.text()) ? e.text("Hide") : e.text("Show");
        f.putCursorAtEnd()
    });
    forgotPasswordLink.on("click", function(e) {
        e.preventDefault();
        var f = b("#signin-email").val();
        forgot_password_selected(f)
    });
    loginWithOTP.on("click", function(e) {
        e.preventDefault();
        var f = b("#signin-email").val();
        loginWithOTP_selected(f)
    });
    backToLoginLink.on("click", function(e) {
        e.preventDefault();
        login_selected()
    });
    b(document).on("click", "#captcha-refresh", function() {
        removeErrorMessage();
        b("#captcha-refresh").attr("disabled", "disabled");
        refreshCaptcha()
    });
    b(document).on("click", "#cust-download-app", function() {
        b("html, body").animate({
            scrollTop: b("#cust-app-logo-divId").offset().top
        }, 1000);
        if (b("#navbar").hasClass("pull-right navbar-collapse collapse in")) {
            b("#navbar").removeClass("in")
        }
    });
    b(document).on("click", "#signin-otp-verify-btn", function() {
        removeErrorMessage();
        b("#signin-otp-verify-btn").attr("disabled", "disabled");
        customerLoginVerifyOTP()
    });
    b(document).on("click", "#signin-otp-resend-btn", function() {
        removeErrorMessage;
        b("#signin-otp-resend-btn").hide();
        resendOTP("5", "signin-otp-resend-btn")
    });
    b(document).on("click", "#si-otp-upd-mb-btn", function() {
        removeErrorMessage();
        b("#si-otp-upd-mb-btn").attr("disabled", "disabled");
        updateMobileNumber("login-with-otp-update-phone", "si-otp-upd-mb-btn")
    });
    b(document).on("click", "#verify-si-otp-upd-mb-btn", function() {
        removeErrorMessage();
        b("#verify-si-otp-upd-mb-btn").attr("disabled", "disabled");
        updateMobileOTP("login-with-otp-update-mobile-otp", "login-with-otp-update-mobile-otp-error", "verify-si-otp-upd-mb-btn")
    });
    b(document).on("click", "#verify-si-otp-upd-mb-re-otp-btn", function() {
        removeErrorMessage;
        b("#verify-si-otp-upd-mb-re-otp-btn").hide();
        resendOTP("6", "verify-si-otp-upd-mb-re-otp-btn")
    });
    b(document).on("click", "#signin-up-mb-btn", function() {
        removeErrorMessage();
        b("#signin-up-mb-btn").attr("disabled", "disabled");
        updateMobileNumber("login-update-phone", "signin-up-mb-btn")
    });
    b(document).on("click", "#verify-si-upd-mb-otp-btn", function() {
        removeErrorMessage();
        b("#verify-si-upd-mb-otp-btn").attr("disabled", "disabled");
        updateMobileOTP("login-update-mobile-otp", "login-update-phone-error", "verify-si-upd-mb-otp-btn")
    });
    b(document).on("click", "#verify-si-upd-mb-re-otp-btn", function() {
        removeErrorMessage();
        b("#verify-si-upd-mb-re-otp-btn").hide();
        resendOTP("1", "verify-si-upd-mb-re-otp-btn")
    });
    b(document).on("click", "#link-user-loginMobileUpdate, #link-user-forgotPasswordUpdateMobile, #link-user-loginWithOtpUpdateMobile", function() {
        removeErrorMessage();
        linkUser(this.id)
    });
    b(document).on("click", "#other-number-loginMobileUpdate, #other-number-forgotPasswordUpdateMobile, #other-number-loginWithOTPUpdateMobile", function() {
        removeErrorMessage();
        var h = this.id;
        var g = h.substring(h.lastIndexOf("-") + 1);
        b("#link-user-" + g).attr("disabled", "disabled");
        b(this).hide();
        var e;
        var f;
        if (g == "loginMobileUpdate") {
            e = "cd-login";
            f = "loginMobileUpdateDiv"
        } else {
            if (g == "forgotPasswordUpdateMobile") {
                e = "cd-reset-password";
                f = "forgotPasswordUpdateMobileDiv"
            } else {
                if (g == "loginWithOTPUpdateMobile") {
                    e = "cd-login-otp";
                    f = "loginWithOTPUpdateMobileDiv"
                }
            }
        }
        showHideTargetDivOnSuspiciousActivity(e, f)
    });
    b(document).on("click", "#confirm-kyc-loginMobileUpdate, #confirm-kyc-forgotPasswordUpdateMobile, #confirm-kyc-loginWithOtpUpdateMobile", function() {
        removeErrorMessage();
        validatelinkUserKycData(this.id)
    });
    b(document).on("click", "#signup-btn", function() {
        removeErrorMessage();
        b("#signup-btn").attr("disabled", "disabled");
        customerSignUp()
    });
    b(document).on("click", "#verify-su-otp-btn", function() {
        removeErrorMessage();
        b("#verify-su-otp-btn").attr("disabled", "disabled");
        customerSignUpOTP()
    });
    b(document).on("click", "#verify-su-re-otp-btn", function() {
        removeErrorMessage();
        b("#verify-su-re-otp-btn").hide();
        resendOTP("2", "verify-su-re-otp-btn")
    });
    b(document).on("click", "#verify-fp-otp-btn", function() {
        removeErrorMessage();
        b("#verify-fp-otp-btn").attr("disabled", "disabled");
        forgotPasswordOTP()
    });
    b(document).on("click", "#verify-fp-re-otp-btn", function() {
        removeErrorMessage();
        b("#verify-fp-re-otp-btn").hide();
        resendOTP("3", "verify-fp-re-otp-btn")
    });
    b(document).on("click", "#fp-upd-mb-btn", function() {
        removeErrorMessage();
        b("#fp-upd-mb-btn").attr("disabled", "disabled");
        updateMobileNumber("forgot-password-update-phone", "fp-upd-mb-btn")
    });
    b(document).on("click", "#verify-fp-upd-mb-otp-btn", function() {
        removeErrorMessage();
        b("#verify-fp-upd-mb-otp-btn").attr("disabled", "disabled");
        updateMobileOTP("forgot-password-update-mobile-otp", "forgot-password-update-phone-error", "verify-fp-upd-mb-otp-btn")
    });
    b(document).on("click", "#verify-fp-upd-mb-re-otp-btn", function() {
        removeErrorMessage();
        b("#verify-fp-upd-mb-re-otp-btn").hide();
        resendOTP("4", "verify-fp-upd-mb-re-otp-btn")
    });
    b(document).on("keyup", "#signin-email", function(f) {
        var e = f.keyCode || f.which;
        a(e, "signin-email")
    });
    b(document).on("keyup", "#reset-email", function(f) {
        var e = f.keyCode || f.which;
        a(e, "reset-email")
    });
    function a(g, f) {
        var e = b("#" + f).val();
        if (!isNaN(e) && ((g >= "48" && g <= "57") || (g >= "96" && g <= "105"))) {
            b("#" + f).attr("maxlength", "10")
        } else {
            b("#" + f).attr("maxlength", "100")
        }
    }
    b(document).on("keydown", '#login-update-phone, #login-update-mobile-otp, #signup-phone, #customer-profile-mobile, #signup-otp, #reset-password-otp, #forgot-password-update-phone, #forgot-password-update-mobile-otp, [id*="scheme-flexi-denomination-"], #cp-update-mobile, #cp-update-mobile-otp, #cp-update-email-otp, #gift-order-giftee-mobile-number, #cust-load-wallet-amount, #signin-otp, #login-with-otp-update-phone, #login-with-otp-update-mobile-otp, #signin-captcha, #cust-update-kyc-otp, #redeem-promo-code-mobile, #cust-promo-otp', function(f) {
        var e = f.keyCode || f.which;
        if (f.shiftKey || !((e >= "48" && e <= "57") || (e >= "96" && e <= "105") || e == "8" || e == "9" || e == "37" || e == "39" || e == "46")) {
            return false
        }
    });
    b(document).on("keydown", "#signup-username, #customer-profile-first-name, #gift-order-giftee-name, #cust-name-update, #kyc-doc-cust-name", function(f) {
        var e = f.key.charCodeAt();
        if (!((e >= "65" && e <= "90") || (e >= "97" && e <= "122") || e == "32" || e == "65" || e == "66" || e == "46" || e == "84")) {
            return false
        }
    });
    b(document).on("keydown", "#cust-kyc-doc-number", function(f) {
        var e = f.key.charCodeAt();
        if (!((e >= "65" && e <= "90") || (e >= "97" && e <= "122") || (e >= "48" && e <= "57") || e == "32" || e == "45" || e == "47" || e == "65" || e == "66" || e == "68" || e == "69" || e == "84")) {
            return false
        }
    });
    b(document).on("keypress", 'input[type="text"], input[type="password"]', function() {
        b(".cd-error-message").text("error message");
        b(".cd-error-message").removeClass("is-visible");
        b(".cd-error-message").removeClass("cd-success-message")
    });
    b(document).on("cut copy paste", 'input[type="text"], input[type="password"], input[type="email"], textarea', function() {
        return false
    });
    b(document).keyup(function(f) {
        var e = f.keyCode || f.which;
        if (e == 13) {
            if (b("#cd-login").hasClass("is-selected")) {
                if (b("#signInDiv").css("display") != "none") {
                    b("#signin-btn").trigger("click")
                } else {
                    if (b("#loginMobileUpdateDiv").css("display") != "none") {
                        b("#signin-up-mb-btn").trigger("click")
                    } else {
                        if (b("#loginMobileUpdateOTPDiv").css("display") != "none") {
                            b("#verify-si-upd-mb-otp-btn").trigger("click")
                        }
                    }
                }
            } else {
                if (b("#cd-signup").hasClass("is-selected")) {
                    if (b("#customerSignUpData").css("display") != "none") {
                        b("#signup-btn").trigger("click")
                    } else {
                        if (b("#customerSignUpOTP").css("display") != "none") {
                            b("#verify-su-otp-btn").trigger("click")
                        }
                    }
                } else {
                    if (b("#cd-reset-password").hasClass("is-selected")) {
                        if (b("#forgotPasswordDataDiv").css("display") != "none") {
                            b("#fp-btn").trigger("click")
                        } else {
                            if (b("#forgotPasswordOTP").css("display") != "none") {
                                b("#verify-fp-otp-btn").trigger("click")
                            } else {
                                if (b("#forgotPasswordUpdateMobileDiv").css("display") != "none") {
                                    b("#fp-upd-mb-btn").trigger("click")
                                } else {
                                    if (b("#forgotPasswordUpdateMobileOTPDiv").css("display") != "none") {
                                        b("#verify-fp-upd-mb-otp-btn").trigger("click")
                                    }
                                }
                            }
                        }
                    } else {
                        if (b("#cd-login-otp").hasClass("is-selected")) {
                            if (b("#loginOTPDataDiv").css("display") != "none") {
                                b("#signin-otp-verify-btn").trigger("click")
                            } else {
                                if (b("#loginWithOTPUpdateMobileDiv").css("display") != "none") {
                                    b("#si-otp-upd-mb-btn").trigger("click")
                                } else {
                                    if (b("#loginWithOTPUpdateMobileOTPDiv").css("display") != "none") {
                                        b("#verify-si-otp-upd-mb-btn").trigger("click")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    b(document).click(function(e) {
        if (!b(e.target).parent().hasClass("cart")) {
            if (b(".addcart-popup").is(":visible")) {
                b(".addcart-popup").hide()
            }
        }
        if (!(b(e.target).parents().hasClass("user dropdown-toggle") || b(e.target).parents().hasClass("dropdown-content open") || b(e.target).hasClass("dropdown-content open"))) {
            if (b(".dropdown-content").hasClass("open")) {
                b(".dropdown-content").toggleClass("open");
                collapseWalletAmountMenu()
            }
        }
        if (b(e.target)[0].id != "mobile-main-menu-button" || b(e.target).parent()[0].id != "mobile-main-menu-button") {
            closeMobileMainMenu()
        }
        if (b(e.target)[0].id != "mobile-user-link" || b(e.target).parent()[0].id != "mobile-user-link") {
            closeMobileUserMenu()
        }
    });
    b(document).click(function(g) {
        var f = b("#navbar");
        if (!f.is(g.target) && f.has(g.target).length === 0) {
            if (f.hasClass("pull-right navbar-collapse collapse in")) {
                f.removeClass("in")
            }
        }
    });
    b(document).on("click", "#voucher-cart-btn", function(e) {
        b("#voucher-cart-btn").attr("disabled", "disabled");
        viewVoucherCart()
    });
    b(document).on("click", "#cart-info", function(e) {
        e.stopPropagation()
    });
    b(document).on("click", "#gift-cart-btn", function(e) {
        b("#gift-cart-btn").attr("disabled", "disabled");
        viewGiftCart()
    });
    b(document).on("click", "#success-error-popup-btn", function(e) {
        closeCustomerpopupMessage()
    });
    var d = b(".faq-category h4");
    d.on("click", function(e) {
        e.preventDefault();
        b(this).next(".faq-list").slideToggle(200).end().parent(".faq-category").toggleClass("faq-category-visible")
    });
    var c = b(".faq-trigger");
    c.on("click", function(e) {
        e.preventDefault();
        b(this).next(".faq-content").slideToggle(200).end().parent("li").toggleClass("content-visible")
    });
    b(document).on("click", "#faq-query-contact", function(e) {
        b("#faq-query-contact").attr("disabled", "disabled");
        window.location.href = "/contact"
    });
    b(document).on("click", "#scroll-top-link", function(e) {
        b("html, body").animate({
            scrollTop: b(".wrapper").offset().top
        }, 500)
    });
    b(document).on("click", ".ppi-a", function(e) {
        b("html, body").animate({
            scrollTop: b(".ppi-customers.english").offset().top
        }, 500)
    });
    b(document).on("click", ".pa-a", function(e) {
        b("html, body").animate({
            scrollTop: b(".pa-customers.english").offset().top
        }, 500)
    });
    b(document).on("click", ".ppi-a-hindi", function(e) {
        b("html, body").animate({
            scrollTop: b(".ppi-customers.hindi").offset().top
        }, 500)
    });
    b(document).on("click", ".pa-a-hindi", function(e) {
        b("html, body").animate({
            scrollTop: b(".pa-customers.hindi").offset().top
        }, 500)
    });
    b(document).on("click", ".co-brands-btn", function(f) {
        var e = b(this).attr("data-language");
        b("html, body").animate({
            scrollTop: b("#coBrandPartner." + e).offset().top
        }, 500)
    });
    b(document).on("click", "#view-cart-btn", function() {
        b("#view-cart-btn").attr("disabled", "disabled");
        if (externalRequest === "true") {
            window.location.href = "/ext/buyVoucher/viewCart"
        } else {
            window.location.href = "/buyVoucher/viewCart"
        }
    });
    b(document).on("click", "#view-gift-cart-btn", function() {
        b("#view-gift-cart-btn").attr("disabled", "disabled");
        window.location.href = "/sendGift/viewCart"
    });
    b(window).scroll(function() {
        if (b(this).scrollTop()) {
            b("#scroll-top-link:hidden").stop(true, true).fadeIn()
        } else {
            b("#scroll-top-link").stop(true, true).fadeOut()
        }
    });
    jQuery(document).bind("ajaxSend", function(g, f, e) {
        if (e.type == "POST") {
            f.setRequestHeader("X-CSRF-Token", b("#csrfToken").val())
        }
    });
    b(document).on("click", "#customer-gift-tab, #customer-order-tab, #customer-profile-tab, #customer-balance-tab, #customer-voucher-tab, #customer-redeem-coupon-code-tab, #customer-card-tab, #customer-brand-store-tab, #customer-load-wallet-tab", function() {
        b(this).css("pointerEvents", "none")
    });
    b(document).on("click", '[id^="en-ds-"]', function() {
        b(this).css("pointerEvents", "none")
    });
    b(document).on("click", ".view-terms-english-btn", function() {
        var e = window.location.hash;
        b(".view-terms-hindi-btn").removeClass("active");
        b(".view-terms-kannada-btn").removeClass("active");
        b(".view-terms-english-btn").addClass("active");
        b("#terms-english").removeClass("hide");
        b("#terms-kanada").addClass("hide");
        b("#terms-hindi").addClass("hide");
        document.title = "TnC | PinePerks";
        hashCobrand(e, "terms-english")
    });
    b(document).on("click", "#view-terms-hindi-btn", function() {
        var e = window.location.hash;
        b(".view-terms-english-btn").removeClass("active");
        b(".view-terms-kannada-btn").removeClass("active");
        b(".view-terms-hindi-btn").addClass("active");
        b("#terms-hindi").removeClass("hide");
        b("#terms-kanada").addClass("hide");
        b("#terms-english").addClass("hide");
        document.title = "नियम और शर्तें | पाइन पर्क्स";
        hashCobrand(e, "terms-hindi")
    });
    b(document).on("click", "#view-terms-Kannada-btn", function() {
        var e = window.location.hash;
        b(".view-terms-english-btn").removeClass("active");
        b(".view-terms-hindi-btn").removeClass("active");
        b(".view-terms-kannada-btn").addClass("active");
        b("#terms-kanada").removeClass("hide");
        b("#terms-hindi").addClass("hide");
        b("#terms-english").addClass("hide");
        document.title = "ನಿಯಮಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು | ಪೈನ್ ಪರ್ಕ್ಸ್";
        hashCobrand(e, "terms-kanada")
    });
    b(document).on("click", "#view-greivance-english-btn", function() {
        b("#view-greivance-hindi-btn").removeClass("text-pink");
        b("#view-greivance-english-btn").addClass("text-pink");
        b("#grievance-redressal-policy-english").removeClass("hide");
        b("#grievance-redressal-policy-hindi").addClass("hide");
        document.title = "Grievance Policy | PinePerks"
    });
    b(document).on("click", "#view-greivance-hindi-btn", function() {
        b("#view-greivance-english-btn").removeClass("text-pink");
        b("#view-greivance-hindi-btn").addClass("text-pink");
        b("#grievance-redressal-policy-hindi").removeClass("hide");
        b("#grievance-redressal-policy-english").addClass("hide");
        document.title = "शिकायत निवारण नीति | पाइन पर्क्स"
    });
    b(document).on("click", ".inner-logo", function() {
        window.location.href = "/"
    })
});
function hashCobrand(a, d) {
    if (window.location.hash != "") {
        var c = $("#" + d + ' [data-coBrand="' + a.split("#")[1] + '"]');
        var b = $(c).attr("data-title");
        if (!$("#" + d + " .without-subheading")[0].textContent.includes("-")) {
            $("#" + d + " .without-subheading")[0].textContent += " - " + b
        }
        $(c).show();
        if (a === "#plusPay") {
            $(".terms-condition-language").hide()
        }
        $(".view-terms-english-btn").show();
        $(".view-terms-hindi-btn").show();
        $(".view-terms-kannada-btn").show()
    } else {
        $(".pineTerms").show();
        $(".co-brands-btn").show();
        $(".co-brands-btn-hindi").show();
        $(".co-brands-btn-kannada").show();
        $(".view-terms-english-btn").show();
        $(".view-terms-hindi-btn").show();
        $(".view-terms-kannada-btn").show()
    }
    $(".smlLoader").addClass("hide")
}
$(window).on("load", function() {
    if ($(".coBrandTnc").length > 0) {
        var a = window.location.hash;
        hashCobrand(a, "terms-english")
    }
});
jQuery.fn.putCursorAtEnd = function() {
    return this.each(function() {
        if (this.setSelectionRange) {
            var a = $(this).val().length * 2;
            this.focus();
            this.setSelectionRange(a, a)
        } else {
            $(this).val($(this).val())
        }
    })
}
;
function setStoreLocatorBrandId(a) {
    storeLocatorBrandId = a
}
function login_selected() {
    var b = {};
    var a;
    $.ajax({
        url: "/checkBrowserSession",
        async: true,
        type: "POST",
        data: JSON.stringify(b),
        dataType: "json",
        contentType: "application/json",
        success: function(e) {
            var h = JSON.stringify(e);
            var c = $.parseJSON(h);
            var g = c.statusKey;
            var f = c.statusValue;
            var j = f.key;
            if (g == 1) {
                $("#si-via-otp-link").removeAttr("disabled");
                $("#si-via-otp-ajax-loader").hide();
                if (j == 2) {
                    var i = new Date();
                    $("#signin-captcha").val("");
                    $("#captcha-img").removeAttr("src");
                    $("#captcha-img").attr("src", "/stickyImg?" + i.getTime());
                    $("#captcha").show()
                }
                showHideCustomerSignInChildDiv("signInDiv");
                clearLoginWithOTPFormData();
                clearSignUpFormData();
                clearForgotPasswordFormData();
                mainNav.children("ul").removeClass("is-visible");
                formModal.addClass("is-visible");
                formLogin.addClass("is-selected");
                formLoginOTP.removeClass("is-selected");
                formSignup.removeClass("is-selected");
                formForgotPassword.removeClass("is-selected");
                tabLogin.addClass("selected");
                tabSignup.removeClass("selected");
                $(".btn.full-width.btn-login").removeAttr("disabled");
                $(".re-send-otp-link").show();
                $(".re-send-otp-link-ajax-loader").hide()
            } else {
                window.location.href = "/"
            }
        },
        error: function(c) {
            window.location.href = "/"
        }
    })
}
function loginWithOTP_selected(a) {
    $("#si-via-otp-link").attr("disabled", "disabled");
    $("#si-via-otp-ajax-loader").show();
    customerLoginWithOTP(a);
    $(".re-send-otp-link").show();
    $(".re-send-otp-link-ajax-loader").hide()
}
function signup_selected() {
    clearSignInFormData();
    clearLoginWithOTPFormData();
    showHideCustomerSignUpChildDiv("customerSignUpData");
    mainNav.children("ul").removeClass("is-visible");
    formModal.addClass("is-visible");
    formLogin.removeClass("is-selected");
    formSignup.addClass("is-selected");
    formForgotPassword.removeClass("is-selected");
    formLoginOTP.removeClass("is-selected");
    tabLogin.removeClass("selected");
    tabSignup.addClass("selected");
    $(".btn.full-width.btn-login").removeAttr("disabled");
    $(".re-send-otp-link").show();
    $(".re-send-otp-link-ajax-loader").hide()
}
function forgot_password_selected(a) {
    showHideResetPasswordChildDiv("forgotPasswordDataDiv");
    if (isValidString(a)) {
        if (!isNaN(a)) {
            if (isValidMobileNumber(a)) {
                $("#reset-email").val(a)
            }
        } else {
            if (isValidEmail(a)) {
                $("#reset-email").val(a)
            }
        }
    }
    formLogin.removeClass("is-selected");
    formSignup.removeClass("is-selected");
    formLoginOTP.removeClass("is-selected");
    formForgotPassword.addClass("is-selected");
    $(".btn.full-width.btn-login").removeAttr("disabled");
    $(".re-send-otp-link").show();
    $(".re-send-otp-link-ajax-loader").hide()
}
function customerLoginWithOTP(f) {
    var e = "signin-error";
    var c = $("#signin-captcha").val();
    var b;
    if (!isValidString(f)) {
        b = "Mobile No./Email is mandatory";
        showErrorMessage(e, b, "signin-email");
        $("#si-via-otp-ajax-loader").hide();
        $("#si-via-otp-link").removeAttr("disabled");
        return false
    }
    if (!isNaN(f)) {
        if (!isValidMobileNumber(f)) {
            b = "Please enter valid mobile number";
            showErrorMessage(e, b, "signin-email");
            $("#si-via-otp-ajax-loader").hide();
            $("#si-via-otp-link").removeAttr("disabled");
            return false
        }
    } else {
        if (f.indexOf("@") != -1) {
            if (!isValidEmail(f)) {
                b = "Please enter valid email";
                showErrorMessage(e, b, "signin-email");
                $("#si-via-otp-ajax-loader").hide();
                $("#si-via-otp-link").removeAttr("disabled");
                return false
            }
        } else {
            b = "Please enter valid Mobile No./Email";
            showErrorMessage(e, b, "signin-email");
            $("#si-via-otp-ajax-loader").hide();
            $("#si-via-otp-link").removeAttr("disabled");
            return false
        }
    }
    if ($("#captcha").css("display") == "block") {
        if (!isValidString(c)) {
            b = "Please enter valid captcha text";
            showErrorMessage(e, b, "signin-captcha");
            $("#si-via-otp-ajax-loader").hide();
            $("#si-via-otp-link").removeAttr("disabled");
            return false
        }
    }
    var d = {
        userName: f,
        captchaCode: c
    };
    var a;
    $.ajax({
        url: "/verifySignInOTP",
        type: "POST",
        async: true,
        data: JSON.stringify(d),
        dataType: "json",
        contentType: "application/json",
        success: function(h) {
            var k = JSON.stringify(h);
            var g = $.parseJSON(k);
            var j = g.statusKey;
            var i = g.statusValue;
            var m = i.key;
            var l = i.value;
            if (j == 1) {
                formLogin.removeClass("is-selected");
                formSignup.removeClass("is-selected");
                formForgotPassword.removeClass("is-selected");
                formLoginOTP.addClass("is-selected");
                showHideLoginWithOTPChildDiv("loginOTPDataDiv")
            } else {
                if (j == 9) {
                    window.location.href = window.location.pathname
                } else {
                    showErrorMessage(e, l, "");
                    $("#si-via-otp-ajax-loader").hide();
                    $("#si-via-otp-link").removeAttr("disabled");
                    refreshCaptcha();
                    $("#captcha").show()
                }
            }
        },
        error: function(g) {
            window.location.href = window.location.pathname
        }
    })
}
function customerLoginVerifyOTP() {
    var a = $("#signin-otp").val();
    var e = "signin-otp-data-error";
    if (!isValidString(a)) {
        var d = "OTP is mandatory";
        showErrorMessage(e, d, "signin-otp");
        $("#signin-otp-verify-btn").removeAttr("disabled");
        return false
    }
    if (!isValidOTP(a)) {
        var d = "Please enter valid OTP";
        showErrorMessage(e, d, "signin-otp");
        $("#signin-otp-verify-btn").removeAttr("disabled");
        return false
    }
    var c = {
        otp: a
    };
    var b;
    $.ajax({
        url: "/signInWithOTP",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(g) {
            var j = JSON.stringify(g);
            var f = $.parseJSON(j);
            var i = f.statusKey;
            var h = f.statusValue;
            var l = h.key;
            var k = h.value;
            if (i == 1) {
                if (l == 4) {
                    showHideTargetDivOnSuspiciousActivity("cd-login-otp", "loginWithOTPUpdateMobileDiv");
                    $("#signin-otp-verify-btn").removeAttr("disabled")
                } else {
                    window.location.href = window.location.pathname
                }
            } else {
                if (i == 9) {
                    window.location.href = window.location.pathname
                } else {
                    if (i == 3) {
                        showHideTargetDivOnSuspiciousActivity("cd-login", "signInDiv")
                    } else {
                        showErrorMessage(e, k, "");
                        $("#signin-otp-verify-btn").removeAttr("disabled")
                    }
                }
            }
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function customerSignUp() {
    var c = $("#signup-username").val();
    var f = $("#signup-phone").val();
    var e = "signup-data-error";
    var d;
    if (!isValidString(c)) {
        d = "Name is mandatory";
        showErrorMessage(e, d, "signup-username");
        $("#signup-btn").removeAttr("disabled");
        return false
    }
    if (!isValidName(c)) {
        d = "Please enter valid name";
        showErrorMessage(e, d, "signup-username");
        $("#signup-btn").removeAttr("disabled");
        return false
    }
    if (!isValidString(f)) {
        d = "Mobile No. is mandatory";
        showErrorMessage(e, d, "signup-phone");
        $("#signup-btn").removeAttr("disabled");
        return false
    }
    if (!isValidMobileNumber(f)) {
        d = "Please enter valid mobile number";
        showErrorMessage(e, d, "signup-phone");
        $("#signup-btn").removeAttr("disabled");
        return false
    }
    var b = {
        userName: c,
        mobileNumber: f,
        password: ""
    };
    var a;
    $.ajax({
        url: "/verifySignUp",
        type: "POST",
        async: true,
        data: JSON.stringify(b),
        dataType: "json",
        contentType: "application/json",
        success: function(h) {
            var k = JSON.stringify(h);
            var g = $.parseJSON(k);
            var j = g.statusKey;
            var i = g.statusValue;
            var l = i.value;
            if (j == 1) {
                showHideTargetDivOnSuspiciousActivity("cd-signup", "customerSignUpOTP");
                $("#signup-btn").removeAttr("disabled");
                $("#verify-su-otp-btn").removeAttr("disabled");
                $("#verify-su-re-otp-btn").show()
            } else {
                if (j == 9) {
                    window.location.href = window.location.pathname
                } else {
                    showErrorMessage(e, l, "");
                    $("#signup-btn").removeAttr("disabled")
                }
            }
        },
        error: function(g) {
            window.location.href = window.location.pathname
        }
    })
}
function customerSignUpOTP() {
    var d = $("#signup-otp").val();
    var c = "signup-otp-error";
    if (!isValidString(d)) {
        var b = "OTP is mandatory";
        showErrorMessage(c, b, "signup-otp");
        $("#verify-su-otp-btn").removeAttr("disabled");
        return false
    }
    if (!isValidOTP(d)) {
        var b = "Please enter valid OTP";
        showErrorMessage(c, b, "signup-otp");
        $("#verify-su-otp-btn").removeAttr("disabled");
        return false
    }
    var e = {
        otp: d
    };
    var a;
    $.ajax({
        url: "/signUp",
        type: "POST",
        async: true,
        data: JSON.stringify(e),
        dataType: "json",
        contentType: "application/json",
        success: function(g) {
            var j = JSON.stringify(g);
            var f = $.parseJSON(j);
            var i = f.statusKey;
            var h = f.statusValue;
            var l = h.key;
            var k = h.value;
            if (i == 1 || i == 9) {
                window.location.href = window.location.pathname
            } else {
                if (i == 3) {
                    showHideTargetDivOnSuspiciousActivity("cd-signup", "customerSignUpData")
                } else {
                    showErrorMessage(c, k, "")
                }
                if (l != 11) {
                    $("#verify-su-otp-btn").removeAttr("disabled")
                } else {
                    $("#verify-su-re-otp-btn").hide()
                }
            }
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function forgotPasswordOTP() {
    var e = $("#reset-password-otp").val();
    var d = "reset-password-otp-error";
    if (!isValidString(e)) {
        var c = "OTP is mandatory";
        showErrorMessage(d, c, "reset-password-otp");
        $("#verify-fp-otp-btn").removeAttr("disabled");
        return false
    }
    if (!isValidOTP(e)) {
        var c = "Please enter valid OTP";
        showErrorMessage(d, c, "reset-password-otp");
        $("#verify-fp-otp-btn").removeAttr("disabled");
        return false
    }
    var a = {
        otp: e
    };
    var b;
    $.ajax({
        url: "/verifyResetPasswordOTP",
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(g) {
            var j = JSON.stringify(g);
            var f = $.parseJSON(j);
            var i = f.statusKey;
            var h = f.statusValue;
            var l = h.key;
            var k = h.value;
            if (i == 1) {
                showHideTargetDivOnSuspiciousActivity("cd-reset-password", "resetPasswordDiv");
                $("#verify-fp-otp-btn").removeAttr("disabled")
            } else {
                if (i == 9) {
                    window.location.href = window.location.pathname
                } else {
                    if (i == 3) {
                        showHideTargetDivOnSuspiciousActivity("cd-reset-password", "forgotPasswordDataDiv")
                    } else {
                        showErrorMessage(d, k, "")
                    }
                    $("#verify-fp-otp-btn").removeAttr("disabled")
                }
            }
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function updateMobileNumber(a, c) {
    var f = $("#" + a).val();
    var e = a + "-error";
    var d;
    if (!isValidString(f)) {
        d = "Mobile No. is mandatory";
        showErrorMessage(e, d, a);
        $("#" + c).removeAttr("disabled");
        return false
    }
    if (!isValidMobileNumber(f)) {
        d = "Please enter valid mobile number";
        showErrorMessage(e, d, a);
        $("#" + c).removeAttr("disabled");
        return false
    }
    var g = {
        mobileNumber: f
    };
    var b;
    $.ajax({
        url: "/verifyUpdateMobile",
        type: "POST",
        async: true,
        data: JSON.stringify(g),
        dataType: "json",
        contentType: "application/json",
        success: function(i) {
            var l = JSON.stringify(i);
            var h = $.parseJSON(l);
            var k = h.statusKey;
            var j = h.statusValue;
            var m = j.value;
            if (k == 1) {
                if (a == "login-update-phone") {
                    targetMainDivId = "cd-login";
                    targetChildDivId = "loginMobileUpdateOTPDiv"
                } else {
                    if (a == "forgot-password-update-phone") {
                        targetMainDivId = "cd-reset-password";
                        targetChildDivId = "forgotPasswordUpdateMobileOTPDiv"
                    } else {
                        if (a == "login-with-otp-update-phone") {
                            targetMainDivId = "cd-login-otp";
                            targetChildDivId = "loginWithOTPUpdateMobileOTPDiv"
                        }
                    }
                }
                showHideTargetDivOnSuspiciousActivity(targetMainDivId, targetChildDivId);
                $("#" + c).removeAttr("disabled")
            } else {
                if (k == 9) {
                    window.location.href = window.location.pathname
                } else {
                    if (k == 3) {
                        showHideTargetDivOnSuspiciousActivity("cd-login", "signInDiv")
                    } else {
                        showErrorMessage(e, m, "")
                    }
                    $("#" + c).removeAttr("disabled")
                }
            }
        },
        error: function(h) {
            window.location.href = window.location.pathname
        }
    })
}
function updateMobileOTP(f, b, d) {
    var h = $("#" + f).val();
    var g = f + "-error";
    if (!isValidString(h)) {
        var e = "OTP is mandatory";
        showErrorMessage(g, e, f);
        $("#" + d).removeAttr("disabled");
        return false
    }
    if (!isValidOTP(h)) {
        var e = "Please enter valid OTP";
        showErrorMessage(g, e, f);
        $("#" + d).removeAttr("disabled");
        return false
    }
    var a = {
        otp: h
    };
    var c;
    $.ajax({
        url: "/updateMobile",
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(l) {
            var p = JSON.stringify(l);
            var k = $.parseJSON(p);
            var o = k.statusKey;
            var n = k.statusValue;
            var j = n.key;
            var q = n.value;
            var m;
            var i;
            if (o == 1) {
                if (j == 12) {
                    if (f == "login-update-mobile-otp") {
                        m = "cd-login";
                        i = "loginMobileUpdateLinkAccountDiv";
                        $("#link-user-loginMobileUpdate").removeAttr("disabled", "disabled");
                        $("#other-number-loginMobileUpdate").show()
                    } else {
                        if (f == "forgot-password-update-mobile-otp") {
                            m = "cd-reset-password";
                            i = "forgotPasswordUpdateMobileLinkAccountDiv";
                            $("#link-user-forgotPasswordUpdateMobile").removeAttr("disabled", "disabled");
                            $("#other-number-forgotPasswordUpdateMobile").show()
                        } else {
                            if (f == "login-with-otp-update-mobile-otp") {
                                m = "cd-login-otp";
                                i = "loginWithOTPUpdateMobileLinkAccountDiv";
                                $("#link-user-loginWithOTPUpdateMobile").removeAttr("disabled", "disabled");
                                $("#other-number-loginWithOTPUpdateMobile").show()
                            }
                        }
                    }
                    showHideTargetDivOnSuspiciousActivity(m, i)
                } else {
                    window.location.href = window.location.pathname
                }
            } else {
                if (o == 9) {
                    window.location.href = window.location.pathname
                } else {
                    if (o == 3) {
                        if (j == 6) {
                            if (f == "login-update-mobile-otp") {
                                m = "cd-login";
                                i = "loginMobileUpdateDiv"
                            } else {
                                if (f == "login-with-otp-update-mobile-otp") {
                                    m = "cd-login-otp";
                                    i = "loginWithOTPUpdateMobileDiv";
                                    b = "login-with-otp-update-phone-error"
                                }
                            }
                        } else {
                            if (j == 8) {
                                m = "cd-login";
                                i = "signInDiv"
                            }
                        }
                        showHideTargetDivOnSuspiciousActivity(m, i);
                        if (j == 6) {
                            showErrorMessage(b, q, "")
                        }
                    } else {
                        showErrorMessage(g, q, "")
                    }
                }
            }
            $("#" + d).removeAttr("disabled")
        },
        error: function(i) {
            window.location.href = window.location.pathname
        }
    })
}
function linkUser(e) {
    var d = e.substring(e.lastIndexOf("-") + 1);
    $("#" + e).attr("disabled", "disabled");
    $("#other-number-" + d).hide();
    var c;
    if (d == "loginMobileUpdate") {
        c = "login-up-mb-link-acc-error"
    } else {
        if (d == "forgotPasswordUpdateMobile") {
            c = "fp-up-mb-link-acc-error"
        } else {
            if (d == "loginWithOTPUpdateMobile") {
                c = "si-otp-up-mb-link-acc-error"
            }
        }
    }
    var a = {};
    var b;
    $.ajax({
        url: "/linkAccountUpdateMobile",
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(g) {
            var j = JSON.stringify(g);
            var f = $.parseJSON(j);
            var i = f.statusKey;
            var h = f.statusValue;
            var l = h.value;
            if (i == 1) {
                var k = h.key;
                if (k == 17) {
                    if (d == "loginMobileUpdate") {
                        showHideTargetDivOnSuspiciousActivity("cd-login", "loginMobileUpdateLinkAccountConfirmKYCDiv");
                        $("#login-up-mb-link-acc-conf-kyc-doc-name").text(l);
                        $("#login-up-mb-link-acc-conf-kyc-doc-num").val("")
                    } else {
                        if (d == "forgotPasswordUpdateMobile") {
                            showHideTargetDivOnSuspiciousActivity("cd-reset-password", "forgotPasswordUpdateMobileLinkAccountConfirmKYCDiv");
                            $("#fp-up-mb-link-acc-conf-kyc-doc-name").text(l);
                            $("#fp-up-mb-link-acc-conf-kyc-doc-num").val("")
                        } else {
                            if (d == "loginWithOtpUpdateMobile") {
                                showHideTargetDivOnSuspiciousActivity("cd-login-otp", "loginWithOTPUpdateMobileLinkAccountConfirmKYCDiv");
                                $("#si-otp-up-mb-link-acc-conf-kyc-doc-name").text(l);
                                $("#si-otp-up-mb-link-acc-conf-kyc-doc-num").val("")
                            }
                        }
                    }
                    $("#" + e).removeAttr("disabled")
                } else {
                    window.location.href = window.location.pathname
                }
            } else {
                if (i == 9) {
                    window.location.href = window.location.pathname
                } else {
                    if (i == 3) {
                        window.location.href = "/"
                    } else {
                        showErrorMessage(c, l, "");
                        $("#" + e).removeAttr("disabled")
                    }
                }
            }
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function validatelinkUserKycData(g) {
    var e = g.substring(g.lastIndexOf("-") + 1);
    $("#" + g).attr("disabled", "disabled");
    var d;
    var c;
    var a;
    if (e == "loginMobileUpdate") {
        d = "login-up-mb-link-acc-conf-kyc-error";
        c = $("#login-up-mb-link-acc-conf-kyc-doc-num").val();
        a = "loginMobileUpdateLinkAccountConfirmKYCDiv"
    } else {
        if (e == "forgotPasswordUpdateMobile") {
            d = "fp-up-mb-link-acc-conf-kyc-error";
            c = $("#fp-up-mb-link-acc-conf-kyc-doc-num").val();
            a = "forgotPasswordUpdateMobileLinkAccountConfirmKYCDiv"
        } else {
            if (e == "loginWithOtpUpdateMobile") {
                d = "si-otp-up-mb-link-acc-conf-kyc-error";
                c = $("#link-user-si-otp-up-mb-confirm-kyc-doc-num").val();
                a = "loginWithOTPUpdateMobileLinkAccountConfirmKYCDiv"
            }
        }
    }
    var f = {
        documentNumber: c
    };
    var b;
    $.ajax({
        url: "/linkAccountConfirmKYCData",
        type: "POST",
        async: true,
        data: JSON.stringify(f),
        dataType: "json",
        contentType: "application/json",
        success: function(i) {
            var l = JSON.stringify(i);
            var h = $.parseJSON(l);
            var k = h.statusKey;
            var j = h.statusValue;
            var m = j.value;
            if (k == 1) {
                linkKYCValidatedAccount(d, a)
            } else {
                if (k == 9) {
                    window.location.href = window.location.pathname
                } else {
                    if (k == 3) {
                        window.location.href = "/"
                    } else {
                        showErrorMessage(d, m, "");
                        $("#" + g).removeAttr("disabled")
                    }
                }
            }
        },
        error: function(h) {
            window.location.href = window.location.pathname
        }
    })
}
function linkKYCValidatedAccount(c, a) {
    var d = {};
    var b;
    $.ajax({
        url: "/linkAccountUpdateMobile",
        type: "POST",
        async: true,
        data: JSON.stringify(d),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var i = JSON.stringify(f);
            var e = $.parseJSON(i);
            var h = e.statusKey;
            var g = e.statusValue;
            var j = g.value;
            if (h == 1 || h == 9) {
                window.location.href = window.location.pathname
            } else {
                if (h == 3) {
                    window.location.href = "/"
                } else {
                    showErrorMessage(c, j, "");
                    $("#" + kycDataId).removeAttr("disabled")
                }
            }
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function resendOTP(f, c) {
    var d;
    var e;
    var a;
    if (f == "1") {
        d = "/verifyUpdateMobile/resendOTP";
        e = "login-update-mobile-otp-error";
        a = "si-upd-mb-re-otp-ajax-loader"
    } else {
        if (f == "2") {
            d = "/verifySignUp/resendOTP";
            e = "signup-otp-error";
            a = "su-re-otp-ajax-loader"
        } else {
            if (f == "3") {
                d = "/verifyResetPassword/resendOTP";
                e = "reset-password-otp-error";
                a = "fp-re-otp-ajax-loader"
            } else {
                if (f == "4") {
                    d = "/resetPassword/verifyUpdateMobile/resendOTP";
                    e = "forgot-password-update-mobile-otp-error";
                    a = "fp-upd-mb-re-otp-ajax-loader"
                } else {
                    if (f == "5") {
                        d = "/verifySignInOTP/resendOTP";
                        e = "signin-otp-data-error";
                        a = "signin-otp-resend-btn-ajax-loader"
                    } else {
                        if (f == "6") {
                            d = "/loginWithOTP/verifyUpdateMobile/resendOTP";
                            e = "login-with-otp-update-mobile-otp-error";
                            a = "si-otp-upd-mb-re-otp-ajax-loader"
                        }
                    }
                }
            }
        }
    }
    $("#" + a).show();
    var g = {};
    var b;
    $.ajax({
        url: d,
        type: "POST",
        async: true,
        data: JSON.stringify(g),
        dataType: "json",
        contentType: "application/json",
        success: function(i) {
            var l = JSON.stringify(i);
            var h = $.parseJSON(l);
            var k = h.statusKey;
            var j = h.statusValue;
            var m = j.value;
            if (k == 3) {
                window.location.href = "/"
            } else {
                if (k == 9) {
                    window.location.href = window.location.pathname
                } else {
                    if (k == 1) {
                        $("#" + e).addClass("cd-success-message")
                    }
                    showErrorMessage(e, m, "");
                    $("#" + a).hide();
                    $("#" + c).show()
                }
            }
        },
        error: function(h) {
            window.location.href = window.location.pathname
        }
    })
}
function showHideTargetDivOnSuspiciousActivity(a, b) {
    mainNav.children("ul").removeClass("is-visible");
    formModal.addClass("is-visible");
    formLogin.removeClass("is-selected");
    formSignup.removeClass("is-selected");
    formForgotPassword.removeClass("is-selected");
    formLoginOTP.removeClass("is-selected");
    tabLogin.removeClass("selected");
    tabSignup.removeClass("selected");
    if (a == "cd-login") {
        formLogin.addClass("is-selected");
        tabLogin.addClass("selected");
        if (b == "signInDiv") {
            refreshCaptcha();
            $("#captcha").show()
        }
        showHideCustomerSignInChildDiv(b)
    } else {
        if (a == "cd-signup") {
            formSignup.addClass("is-selected");
            tabSignup.addClass("selected");
            showHideCustomerSignUpChildDiv(b)
        } else {
            if (a == "cd-reset-password") {
                formForgotPassword.addClass("is-selected");
                tabLogin.addClass("selected");
                showHideResetPasswordChildDiv(b)
            } else {
                if (a == "cd-login-otp") {
                    formLoginOTP.addClass("is-selected");
                    tabLogin.addClass("selected");
                    showHideLoginWithOTPChildDiv(b)
                }
            }
        }
    }
}
function showHideCustomerSignInChildDiv(a) {
    removeErrorMessage();
    clearSignInFormData();
    $("#signInDiv").hide();
    $("#loginMobileUpdateDiv").hide();
    $("#loginMobileUpdateOTPDiv").hide();
    $("#loginMobileUpdateLinkAccountDiv").hide();
    $("#loginMobileUpdateLinkAccountConfirmKYCDiv").hide();
    $("#" + a).show()
}
function showHideLoginWithOTPChildDiv(a) {
    removeErrorMessage();
    clearLoginWithOTPFormData();
    $("#loginOTPDataDiv").hide();
    $("#loginWithOTPUpdateMobileDiv").hide();
    $("#loginWithOTPUpdateMobileOTPDiv").hide();
    $("#loginWithOTPUpdateMobileLinkAccountDiv").hide();
    $("#loginWithOTPUpdateMobileLinkAccountConfirmKYCDiv").hide();
    $("#" + a).show()
}
function showHideCustomerSignUpChildDiv(a) {
    removeErrorMessage();
    clearSignUpFormData();
    $("#customerSignUpData").hide();
    $("#customerSignUpOTP").hide();
    $("#" + a).show()
}
function showHideResetPasswordChildDiv(a) {
    removeErrorMessage();
    clearForgotPasswordFormData();
    $("#forgotPasswordDataDiv").hide();
    $("#forgotPasswordOTP").hide();
    $("#resetPasswordDiv").hide();
    $("#forgotPasswordUpdateMobileDiv").hide();
    $("#forgotPasswordUpdateMobileOTPDiv").hide();
    $("#forgotPasswordUpdateMobileLinkAccountDiv").hide();
    $("#forgotPasswordUpdateMobileLinkAccountConfirmKYCDiv").hide();
    $("#" + a).show()
}
function removeErrorMessage() {
    $(".cd-error-message").text("error message");
    $(".cd-error-message").removeClass("is-visible");
    $(".cd-error-message").removeClass("cd-success-message")
}
function showErrorMessage(c, b, a) {
    $("#" + c).text(b);
    $("#" + c).addClass("is-visible");
    if (a != "") {
        $("#" + a).focus()
    }
}
function clearSignInFormData() {
    $("#signin-email").val("");
    $("#signin-captcha").val("");
    $("#signin-password").val("");
    $("#login-update-phone").val("");
    $("#login-update-mobile-otp").val("")
}
function clearLoginWithOTPFormData() {
    $("#signin-otp").val("");
    $("#login-with-otp-update-phone").val("");
    $("#login-with-otp-update-mobile-otp").val("")
}
function clearSignUpFormData() {
    $("#signup-username").val("");
    $("#signup-phone").val("");
    $("#signup-password").val("");
    $("#signup-otp").val("")
}
function clearForgotPasswordFormData() {
    $("#reset-email").val("");
    $("#reset-password-otp").val("");
    $("#reset-old-password").val("");
    $("#forgot-password-update-phone").val("");
    $("#forgot-password-update-mobile-otp").val("")
}
function showCustomerPopup(a) {
    $("#errorDetailTextId").text(a);
    $("#error-popup-div").css("visibility", "visible")
}
function closeCustomerpopupMessage() {
    $("#error-popup-div").css("visibility", "hidden")
}
function showConfirmPopup(b, a, c) {
    $("#confirm-popup-msgid").text(b);
    $("#confirm-popup-div").css("visibility", "visible");
    $(document).on("click", "#confirm-btn-yes, #confirm-btn-no", function(d) {
        $(document).off("click", "#confirm-btn-yes, #confirm-btn-no");
        $(document).off("click", "#confirm-popup-close");
        $("#confirm-popup-div").css("visibility", "hidden");
        a && a(($(this).attr("id") === "confirm-btn-yes"), c)
    });
    $(document).on("click", "#confirm-popup-close", function(d) {
        $(document).off("click", "#confirm-btn-yes, #confirm-btn-no");
        $(document).off("click", "#confirm-popup-close");
        $("#confirm-popup-div").css("visibility", "hidden");
        a && a(false, c)
    })
}
function viewVoucherCart() {
    if ($(".addcart-popup").is(":visible")) {
        $(".addcart-popup").hide();
        $("#voucher-cart-btn").removeAttr("disabled");
        return
    }
    var b;
    if (externalRequest === "true") {
        b = "/ext/cartData"
    } else {
        b = "/cartData"
    }
    var a = {};
    var c;
    $.ajax({
        url: b,
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(e) {
            var f = JSON.stringify(e);
            var d = $.parseJSON(f);
            var h = d.status;
            if (h = 1) {
                var g = d.customerOrderDTO;
                var i = g.totalQuantity;
                var j = g.orderSchemeList;
                showVoucherInCart(j)
            }
            $("#voucher-cart-btn").removeAttr("disabled")
        },
        error: function(d) {
            window.location.href = window.location.pathname
        }
    })
}
function showVoucherInCart(b) {
    $(".addcart-popup").css("display", "block");
    var a = '<div id="cart-info" class="cart-info"><h3 class="text-pink">Your cart</h3><ul class="list-unstyled"><li id="cartItemHeading"><div class="list_content caption_heading"><div class="list_content_caption"></div><div class="list_content_caption quantity">Quantity</div><div class="list_content_caption amount">Price</div></div></li><div id="cartitemScrollDiv" class="view-cart-popup">';
    $.each(b, function(e) {
        var d = b[e];
        var h = d.brandSchemeId;
        var c = d.brandLogoImageUrl;
        var g = getAmountInRupeeToDisplay(d.denomination);
        var f = d.quantity;
        a = a + '<li><div id="cartItemId_' + h + '" class="list_content"><div class="cart_logo" id="cartImage_' + h + '"><img src="' + c + '"></div><div class="quantity" id="cartQuantity_' + h + '">' + f + '</div><div class="amount" id="cartDenomination_' + h + '"> <i class="fa fa-inr va-m"></i>&nbsp;' + g + "</div></div></li>"
    });
    a = a + '</div></ul><div class="table_footer_buttons buttons"><input type="button" value="View Cart" id="view-cart-btn" class="btn btn-block btn-pink text-uppercase"></div></div>';
    sanitizeDynamicHTML(a, ".addcart-popup")
}
function viewGiftCart() {
    if ($(".addcart-popup").is(":visible")) {
        $(".addcart-popup").hide();
        $("#gift-cart-btn").removeAttr("disabled");
        return
    }
    var a = {};
    var b;
    $.ajax({
        url: "/giftCartData",
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(d) {
            var e = JSON.stringify(d);
            var c = $.parseJSON(e);
            var g = c.status;
            if (g = 1) {
                var f = c.customerOrderDTO;
                var h = f.totalQuantity;
                var i = f.orderSchemeList;
                showVoucherInGiftCart(i)
            }
            $("#gift-cart-btn").removeAttr("disabled")
        },
        error: function(c) {
            window.location.href = window.location.pathname
        }
    })
}
function showVoucherInGiftCart(b) {
    $(".addcart-popup").css("display", "block");
    var a = '<div id="cart-info" class="cart-info"><h3 class="text-pink">Your cart</h3><ul class="list-unstyled"><li id="cartItemHeading"><div class="list_content caption_heading"><div class="list_content_caption"></div><div class="list_content_caption quantity">Quantity</div><div class="list_content_caption amount">Price</div></div></li><div id="cartitemScrollDiv" class="view-cart-popup">';
    $.each(b, function(e) {
        var d = b[e];
        var h = d.brandSchemeId;
        var c = d.brandLogoImageUrl;
        var g = getAmountInRupeeToDisplay(d.denomination);
        var f = d.quantity;
        a = a + '<li><div id="cartItemId_' + h + '" class="list_content"><div class="cart_logo" id="cartImage_' + h + '"><img src="' + c + '"></div><div class="quantity" id="cartQuantity_' + h + '">' + f + '</div><div class="amount" id="cartDenomination_' + h + '"><i class="fa fa-inr va-m"></i>&nbsp;' + g + "</div></div></li>"
    });
    a = a + '</div></ul><div class="table_footer_buttons buttons"><input type="button" value="View Cart" id="view-gift-cart-btn" class="btn btn-block btn-pink text-uppercase"></div></div>';
    $(".addcart-popup").html(a)
}
function refreshCaptcha() {
    var b = "signin-error";
    var c = {};
    var a;
    $.ajax({
        url: "/captcha",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var h = JSON.stringify(f);
            var e = $.parseJSON(h);
            var g = e.statusKey;
            if (g == 1) {
                var i = new Date();
                $("#captcha-img").removeAttr("src");
                $("#captcha-img").attr("src", "/stickyImg?" + i.getTime());
                $("#signin-captcha").val("")
            }
            $("#captcha-refresh").removeAttr("disabled")
        },
        error: function(d) {
            window.location.href = "/"
        }
    })
}
function getAmountInRupeeToDisplay(b) {
    if (Number(b) == 0) {
        return 0
    }
    var d = (b / 100).toString();
    var c = ".00";
    if (d.indexOf(".") > 0) {
        c = d.substring(d.indexOf("."), d.length)
    }
    d = Math.floor(d);
    d = d.toString();
    var f = d.substring(d.length - 3);
    var e = d.substring(0, d.length - 3);
    if (e != "") {
        f = "," + f
    }
    var a = e.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + f + c;
    return a
}
function getUnformattedAmountInRupeeToDisplay(b) {
    var a = b % 100;
    if (a == 0) {
        return b / 100
    }
    a = b % 10;
    if (a != 0) {
        return b / 100
    } else {
        return b / 100 + "0"
    }
}
function showCustomerRestrictedCalendar(c, e, f, d, a, b) {
    $("#" + c).datepicker("option", "minDate", e);
    $("#" + c).datepicker("option", "maxDate", f);
    $("#" + c).datepicker("option", "changeMonth", d);
    $("#" + c).datepicker("option", "changeYear", a);
    $("#" + c).datepicker("option", "yearRange", b)
}
function openWalletDropDownMenu() {
    if (!$(".wallet-dropdown-content").hasClass("open")) {
        $(".wallet-dropdown-content").toggleClass("open");
        $("#wallet-caret").addClass("caret-reversed")
    } else {
        collapseWalletAmountMenu()
    }
}
function collapseWalletAmountMenu() {
    if ($(".wallet-dropdown-content").hasClass("open")) {
        $(".wallet-dropdown-content").toggleClass("open");
        $("#wallet-caret").removeClass("caret-reversed")
    }
}
function openMobileMainMenu() {
    closeMobileUserMenu();
    $(".addcart-popup").hide();
    $(".menu-main-details").toggleClass("show-class")
}
function openMobileUserMenu() {
    closeMobileMainMenu();
    $(".addcart-popup").hide();
    $(".user-menu-details").toggleClass("show-class")
}
function closeMobileMainMenu() {
    $(".menu-main-details").removeClass("show-class")
}
function closeMobileUserMenu() {
    $(".user-menu-details").removeClass("show-class")
}
function closeInnerPagePopUp() {
    $(".popup-escape-close").trigger("click")
}
function setExternalVoucherRequestFlag(a) {
    if (isValidString(a)) {
        externalRequest = a
    }
}
if (self == top) {
    document.documentElement.style.visibility = "visible"
} else {
    top.location = self.location
}
function checkMac() {
    var a = navigator.userAgent.toLowerCase();
    if (a.indexOf("safari") != -1 && a.indexOf("chrome") == -1) {
        if (cookieBlocked) {
            showCustomerPopup("Third party cookies blocked!! To share gifts on facebook, change cookie settings to 'Always allow'.");
            return false
        }
    }
    return true
}
;
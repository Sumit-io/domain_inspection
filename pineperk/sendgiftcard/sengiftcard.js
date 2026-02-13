var greetingWiseGreetingJsonObj = {};
var maxScheduleDays = 0;
jQuery(document).ready(function(c) {
    var b = false;
    var d = 50;
    var a = 0;
    c(".error-msg").removeClass("is-visible");
    c("#gift-order-scheduled-date").datepicker({
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
        showWeek: false,
        dateFormat: "dd-M-yy",
        onSelect: function(f, e) {
            c("#gift-order-scheduled-date").val(f);
            c("#gift-order-scheduling-date-text").text(c("#gift-order-scheduled-date").val());
            c("#schedule-gift-date-label").text("Scheduled On :");
            c("#gift-order-scheduling-date-text").show();
            c("#gift-order-refresh-scheduling-cal").show()
        }
    });
    c("#canvas1").on("touchmove", "div", function(f) {
        f.preventDefault()
    });
    c(document).on("click", ".text-style, .stickers-img", function(f) {
        c("html, body").animate({
            scrollTop: c(".tab-content").offset().top
        }, 1000)
    });
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
    c(".category-wrapper").on("click", "#gift-order-scheduling-cal", function() {
        showCustomerRestrictedCalendar("gift-order-scheduled-date", 1, maxScheduleDays);
        c("#gift-order-scheduled-date").datepicker("show")
    });
    c(".category-wrapper").on("click", "#gift-order-refresh-scheduling-cal", function() {
        c("#gift-order-scheduling-date-text").val("");
        c("#gift-order-scheduling-date-text").hide();
        c("#gift-order-scheduled-date").val("");
        c("#schedule-gift-date-label").text("Schedule Gifting  ");
        c("#gift-order-refresh-scheduling-cal").hide()
    });
    c(document).on("keypress", 'input[type="text"]', function() {
        removeErrorMessage()
    });
    c(document).on("click", 'input[type="button"]', function() {
        removeErrorMessage()
    });
    c(document).on("change", 'input[type="checkbox"]', function() {
        removeErrorMessage()
    });
    c(document).on("click", '[id*="greeting-occasion-"]', function() {
        var f = this.id;
        var e = f.substring(f.lastIndexOf("-") + 1);
        showOccasionSpecificGreeting(e)
    });
    c(document).on("click", '[id*="customize-greeting-"]', function() {
        var g = this.id;
        var f = g.substring(g.lastIndexOf("-") + 1);
        var e = c("#greeting-image-" + f).attr("src");
        c("#greeting-popup-greetingId").val(f);
        c("#greeting-customization-popup-imageid").attr("src", e);
        c("#greeting-customization-popup-div").css("visibility", "visible")
    });
    c(document).on("click", "#edit-greeting-btn", function() {
        var e = c("#greeting-popup-greetingId").val();
        if (isValidString(e)) {
            c("#edit-greeting-btn").attr("disabled", "disabled");
            customizeGreeting(false, e, null, false)
        }
    });
    c(document).on("click", "#edit-greeting-next-btn", function() {
        c("#edit-greeting-next-btn").attr("disabled", "disabled");
        c("#ajax-loader-div").show();
        templateObj.screenShotObj.takeSnap(ajaxCallAfterScreenshot)
    });
    c(document).on("click", "#greeting-customization-popup-edit-btn", function() {
        c("#greeting-customization-popup-edit-btn").attr("disabled", "disabled");
        customizeGreetingAfterPriview()
    });
    c(document).on("click", "#greeting-customization-popup-close-btn", function() {
        c("#greeting-customization-popup-div").css("visibility", "hidden")
    });
    c(document).on("click", "#skip-to-send-greeting-btn", function() {
        c("#skip-to-send-greeting-btn").hide();
        c("#skip-to-send-greeting-ajax-loader").show();
        window.location.href = "/sendGift/viewCart"
    });
    c(document).on("change", "#gift-order-agreementId", function() {
        if (c("#gift-order-agreementId").prop("checked") == true) {
            c("#place-gift-order-button").removeAttr("disabled")
        } else {
            c("#place-gift-order-button").attr("disabled", "disabled")
        }
    });
    c(document).on("click", "#place-gift-order-button", function() {
        c("#place-gift-order-button").attr("disabled", "disabled");
        var e = c('[id*="product-details-row-"]');
        if (e && e.length > 0) {
            if (c("#gift-order-agreementId").prop("checked") == false) {
                showCustomerPopup("Please agree to terms and conditions before placing order");
                return false
            }
        }
        placeGiftOrder()
    });
    c(document).on("click", "#greeting-delete-btn", function() {
        c("#greeting-delete-btn").attr("disabled", "disabled");
        deleteGreetingFromOrder()
    });
    c(document).on("click", "#greeting-preview-btn", function() {
        c("#greeting-preview-btn").attr("disabled", "disabled");
        greetingPreview()
    });
    c(document).on("click", "#cust-name-update-btn", function() {
        c("#cust-name-update-btn").attr("disabled", "disabled");
        updateCustomerName()
    });
    c(document).on("click", "#cust-name-update-popup-close-btn", function() {
        c(".error-msg").removeClass("is-visible");
        c("#cust-name-update").val("");
        c("#cust-name-update-btn").removeAttr("disabled");
        c("#cust-name-update-popup-div").css("visibility", "hidden")
    });
    c(document).on("click", "#skip-edit-greeting-view-cart-btn", function() {
        c("#skip-edit-greeting-view-cart-btn").attr("disabled", "disabled");
        window.location.href = "/sendGift/viewCart"
    });
    c(document).on("click", "#skip-save-greeting-add-voucher-btn", function() {
        c("#skip-save-greeting-add-voucher-btn").attr("disabled", "disabled");
        window.location.href = "/sendGift/selectVoucher"
    });
    c(document).on("click", '[id*="delete-gift-link-"]', function() {
        var e = this.id;
        c("#" + e).hide();
        deleteVoucherAndRefreshGiftCartData(e)
    })
});
function populateGreetingList(c) {
    var a = JSON.parse(c);
    for (var b in a) {
        greetingWiseGreetingJsonObj = a[b]
    }
}
function showOccasionSpecificGreeting(a) {
    var b = findActiveOccasionId();
    if (b != a) {
        $.each(greetingWiseGreetingJsonObj, function(d) {
            var f = greetingWiseGreetingJsonObj[d];
            var e = f.greetingId;
            var c = f.occasionIdList;
            var g = $.inArray(parseInt(a), c);
            if (g != -1) {
                if (!$("#greeting-" + e).is(":visible")) {
                    $("#greeting-" + e).show()
                }
            } else {
                if ($("#greeting-" + e).is(":visible")) {
                    $("#greeting-" + e).hide()
                }
            }
        })
    }
    if (b != a) {
        $("#greeting-occasion-" + a).addClass("active");
        $("#greeting-occasion-" + b).removeClass("active")
    }
}
function customizeGreeting(c, f, d, b) {
    $("#edit-greeting-btn").removeAttr("disabled");
    $("#greeting-customization-popup-close-btn").trigger("click");
    var g = findActiveOccasionId();
    if (c) {
        g = d
    }
    var e = {
        greetingId: f,
        occasionId: g,
        confirmEditGreeting: c,
        proceedConfirmEditGreeting: b
    };
    var a;
    $.ajax({
        url: "/editGreeting",
        type: "POST",
        async: true,
        data: JSON.stringify(e),
        dataType: "json",
        contentType: "application/json",
        success: function(j) {
            var k = JSON.stringify(j);
            var i = $.parseJSON(k);
            var h = i.status;
            var n = i.message;
            if (h == 13) {
                var m = i.oldGreetingId;
                var l = i.oldOccasionId;
                showConfirmEditGreetingPopup("You already have a customized greeting saved in your cart. Do you want to continue with new customization?", customizeGreeting, f, m, g, l)
            } else {
                if (h == 1) {
                    window.location.href = n
                } else {
                    window.location.href = window.location.pathname
                }
            }
        },
        error: function(h) {
            window.location.href = window.location.pathname
        }
    })
}
function customizeGreetingAfterPriview() {
    var b = {};
    var a;
    $.ajax({
        url: "/editGreetingAfterPreview",
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
                window.location.href = g
            } else {
                window.location.href = window.location.pathname
            }
        },
        error: function(c) {
            window.location.href = window.location.pathname
        }
    })
}
function ajaxCallAfterScreenshot(e) {
    var b = JSON.stringify(templateObj.json);
    var c = e.replace("data:image/jpeg;base64,", "");
    var d = {
        greetingSchemaJson: b,
        greetingImageByte: c
    };
    var a;
    $.ajax({
        url: "/refreshGreetingSchemaJson",
        type: "POST",
        async: true,
        data: JSON.stringify(d),
        dataType: "json",
        contentType: "application/json",
        success: function(h) {
            var i = JSON.stringify(h);
            var g = $.parseJSON(i);
            var f = g.status;
            var j = g.message;
            if (f == 1) {
                window.location.href = j
            } else {
                window.location.href = window.location.pathname
            }
            $("#ajax-loader-div").hide()
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function deleteVoucherAndRefreshGiftCartData(b) {
    var a = $("#gift-order-giftee-name").val();
    var e = $("#gift-order-giftee-mobile-number").val();
    var h = $("#gift-order-scheduled-date").val();
    if (isValidString(h)) {
        if (!isValidDDMMMYYYYHiphenSeperatedDateStr(h)) {
            var f = "Invalid scheduled date";
            showCustomerPopup(f);
            return false
        }
    }
    var i = b.substring(b.lastIndexOf("-") + 1);
    var j = i.substring(0, i.lastIndexOf("_"));
    var c = i.substring(i.lastIndexOf("_") + 1);
    var g = {
        brandSchemeId: j,
        amount: c,
        gifteeName: a,
        gifteeMobileNumber: e,
        giftingDate: h
    };
    var d;
    $.ajax({
        url: "/refreshGiftCartData",
        type: "POST",
        async: true,
        data: JSON.stringify(g),
        dataType: "json",
        contentType: "application/json",
        success: function(l) {
            var n = JSON.stringify(l);
            var k = $.parseJSON(n);
            var m = k.status;
            var o = k.message;
            o = (o === "true");
            if (m == 0 || m == 1) {
                window.location.href = window.location.pathname
            } else {
                $("#" + b).show();
                showCustomerPopup(o)
            }
        },
        error: function(k) {
            window.location.href = window.location.pathname
        }
    })
}
function placeGiftOrder() {
    var e = $("#gift-order-giftee-name").val();
    var b = $("#gift-order-giftee-mobile-number").val();
    var a = $("#gift-order-scheduled-date").val();
    if (!isValidString(e)) {
        showErrorMessage("send-gift-err-msgId", "Please enter valid recipient name");
        $("#place-gift-order-button").removeAttr("disabled");
        return false
    }
    if (!isValidName(e)) {
        showErrorMessage("send-gift-err-msgId", "Please enter valid name");
        $("#place-gift-order-button").removeAttr("disabled");
        return false
    }
    if (!isValidString(b)) {
        showErrorMessage("send-gift-err-msgId", "Recipient mobile is mandatory");
        $("#place-gift-order-button").removeAttr("disabled");
        return false
    }
    if (!isValidMobileNumber(b)) {
        showErrorMessage("send-gift-err-msgId", "Please enter valid recipient mobile number");
        $("#place-gift-order-button").removeAttr("disabled");
        return false
    }
    if (isValidString(a)) {
        if (!isValidDDMMMYYYYHiphenSeperatedDateStr(a)) {
            showErrorMessage("send-gift-err-msgId", "Invalid scheduled date");
            $("#place-gift-order-button").removeAttr("disabled");
            return false
        }
    }
    var c = {
        gifteeName: e,
        gifteeMobileNumber: b,
        giftingDate: a
    };
    var d;
    $.ajax({
        url: "/placeGiftOrder",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(h) {
            var i = JSON.stringify(h);
            var g = $.parseJSON(i);
            var f = g.status;
            var j = g.message;
            if (f == 1) {
                window.location.href = j
            } else {
                if (f == 8) {
                    login_selected()
                } else {
                    if (f == 10) {
                        showCustomerNameUpdatePopup()
                    } else {
                        showErrorMessage("send-gift-err-msgId", j)
                    }
                }
            }
            $("#place-gift-order-button").removeAttr("disabled")
        },
        error: function(f) {
            window.location.href = window.location.pathname
        }
    })
}
function greetingPreview() {
    var a = $("#greeting-image-src").attr("src");
    $("#greeting-customization-popup-imageid").attr("src", a);
    $("#greeting-customization-popup-div").css("visibility", "visible");
    $("#greeting-preview-btn").removeAttr("disabled")
}
function deleteGreetingFromOrder() {
    var a;
    $.ajax({
        url: "/deleteGreeting",
        type: "POST",
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function(d) {
            var e = JSON.stringify(d);
            var c = $.parseJSON(e);
            var b = c.status;
            var f = c.message;
            if (b == 1) {
                window.location.href = f
            } else {
                showCustomerPopup(f)
            }
            $("#greeting-delete-btn").removeAttr("disabled")
        },
        error: function(b) {
            window.location.href = window.location.pathname
        }
    })
}
function showCustomerNameUpdatePopup() {
    $(".error-msg").removeClass("is-visible");
    $("#cust-name-update-popup-div").css("visibility", "visible")
}
function updateCustomerName() {
    var b = $("#cust-name-update").val();
    if (!isValidName(b)) {
        showErrorMessage("cust-name-update-error", "Please enter valid name");
        $("#cust-name-update-btn").removeAttr("disabled");
        return false
    }
    var c = {
        firstName: b
    };
    var a;
    $.ajax({
        url: "/profileUpdate",
        type: "POST",
        async: true,
        data: JSON.stringify(c),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var g = JSON.stringify(f);
            var e = $.parseJSON(g);
            var d = e.status;
            var h = e.message;
            if (d == 1) {
                window.location.href = window.location.pathname
            } else {
                showErrorMessage("cust-name-update-error", h)
            }
            $("#cust-name-update-btn").removeAttr("disabled")
        },
        error: function(d) {
            window.location.href = window.location.pathname
        }
    })
}
function findActiveOccasionId() {
    var a;
    $("#occasion li").each(function(b) {
        var c = $(this).attr("id");
        if ($("a", this).attr("class") == "active") {
            a = c;
            return
        }
    });
    return a
}
function showConfirmEditGreetingPopup(d, c, b, f, e, a) {
    $("#confirm-popup-edit-greeting-msgid").text(d);
    $("#confirm-popup-div-edit-greeting").css("visibility", "visible");
    $(document).on("click", "#confirm-btn-edit-greeting-yes, #confirm-btn-edit-greeting-no", function(g) {
        $(document).off("click", "#confirm-btn-edit-greeting-yes, #confirm-btn-edit-greeting-no");
        $(document).off("click", "#confirm-popup-edit-greeting-close");
        $("#confirm-popup-div-edit-greeting").css("visibility", "hidden");
        if ($(this).attr("id") === "confirm-btn-edit-greeting-yes") {
            c && c(true, b, e, true)
        } else {
            c && c(true, f, a, false)
        }
    });
    $(document).on("click", "#confirm-popup-edit-greeting-close", function(g) {
        $(document).off("click", "#confirm-btn-edit-greeting-yes, #confirm-btn-edit-greeting-no");
        $(document).off("click", "#confirm-popup-edit-greeting-close");
        $("#confirm-popup-div-edit-greeting").css("visibility", "hidden")
    })
}
function isValidDDMMMYYYYHiphenSeperatedDateStr(a) {
    if (isValidString(a)) {
        var b = a.split("-");
        if (b.length != 3) {
            return false
        }
        if (b[0].length != 2 || b[1].length != 3 || b[2].length != 4) {
            return false
        }
        if (isNaN(b[0]) || isNaN(b[2])) {
            return false
        }
        if (!isNaN(b[1])) {
            return false
        }
        return true
    }
    return false
}
function setMaxScheduleDays(a) {
    maxScheduleDays = a
}
function showErrorMessage(b, a) {
    $("#" + b).text(a);
    $("#" + b).addClass("is-visible")
}
function removeErrorMessage() {
    $(".error-msg").text("Message");
    $(".error-msg").removeClass("is-visible")
}
;
jQuery(document).ready(function(a) {
    a(document).on("click", '[id*="delete-voucher-link-"]', function() {
        var b = this.id;
        a("#" + b).hide();
        deleteVoucherAndRefreshCartData(b)
    });
    a(document).on("change", "#voucher-order-agreementId", function() {
        removeErrorMessage();
        if (a("#voucher-order-agreementId").prop("checked") == true) {
            a("#place-order-button").removeAttr("disabled")
        } else {
            a("#place-order-button").attr("disabled", "disabled")
        }
    });
    a(document).on("click", "#place-order-button", function() {
        a("#place-order-button").attr("disabled", "disabled");
        removeErrorMessage();
        if (a("#voucher-order-agreementId").prop("checked") == true) {
            placeVoucherOrder()
        } else {
            showCustomerPopup("Please agree to terms and conditions before placing order")
        }
    })
});
function deleteVoucherAndRefreshCartData(g) {
    var c = g.substring(g.lastIndexOf("-") + 1);
    var f = c.substring(0, c.lastIndexOf("_"));
    var e = c.substring(c.lastIndexOf("_") + 1);
    var d = {
        brandSchemeId: f,
        amount: e
    };
    var a;
    var b;
    if (externalRequest === "true") {
        b = "/ext/refreshCartData"
    } else {
        b = "/refreshCartData"
    }
    $.ajax({
        url: b,
        type: "POST",
        async: true,
        data: JSON.stringify(d),
        dataType: "json",
        contentType: "application/json",
        success: function(i) {
            var k = JSON.stringify(i);
            var h = $.parseJSON(k);
            var j = h.status;
            var l = h.message;
            l = (l === "true");
            if (j == 1) {
                window.location.href = window.location.pathname
            } else {
                $("#" + g).show();
                showCustomerPopup(l)
            }
        },
        error: function(h) {
            window.location.href = window.location.pathname
        }
    })
}
function placeVoucherOrder() {
    var a = {};
    var b;
    var c;
    if (externalRequest === "true") {
        c = "/ext/placeOrder"
    } else {
        c = "/placeOrder"
    }
    $.ajax({
        url: c,
        type: "POST",
        async: true,
        data: JSON.stringify(a),
        dataType: "json",
        contentType: "application/json",
        success: function(f) {
            var g = JSON.stringify(f);
            var e = $.parseJSON(g);
            var d = e.status;
            var h = e.message;
            if (d == 1) {
                window.location.href = h
            } else {
                if (d == 8) {
                    login_selected()
                } else {
                    showCustomerPopup(h)
                }
            }
            $("#place-order-button").removeAttr("disabled")
        },
        error: function(d) {
            window.location.href = window.location.pathname
        }
    })
}
function removeErrorMessage() {
    $(".error-msg").text("Message");
    $(".error-msg").removeClass("is-visible")
}
;
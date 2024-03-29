!function(w, d, i, s) {
    function l() {
        if (!d.getElementById(i)) {
            var f = d.getElementsByTagName(s)[0],
                e = d.createElement(s);
            e.type = "text/javascript", e.async = !0, e.src = "https://canny.io/sdk.js", f.parentNode.insertBefore(
                e, f)
        }
    }
    if ("function" != typeof w.Canny) {
        var c = function() {
            c.q.push(arguments)
        };
        c.q = [], w.Canny = c, "complete" === d.readyState ? l() : w.attachEvent ? w.attachEvent("onload", l) : w
            .addEventListener("load", l, !1)
    }
}(window, document, "canny-jssdk", "script");

Canny('initChangelog', {
    appID: '63caf16074e33135aacac961',
    position: 'bottom',
    align: 'right',
    theme: 'auto',
});

$(window).on('load', function() {
    if ($(".dataTables_info").length) {
        $(".dataTables_info").css("color", "#6B7280");
    }

    setTimeout(() => {
        $('[data-loader]').fadeOut('slow', function() {
            $('body').css('overflow', 'visible');
            $(this).remove();
        });
    }, 500);

    var activeTab = localStorage.getItem("activeTab") || null;
    if (activeTab != null) {
        if (activeTab == "app") {
            $("#app-tab").click();
        } else if (activeTab == "seller") {
            $("#seller-tab").click();
        } else if (activeTab == "account") {
            $("#account-tab").click();
        }
    }
});

$("[data-tbt]").click(function() {
    localStorage.setItem("activeTab", $(this).attr("data-tbt"));
});

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
    }
}

function closeModal(modalID) {
    var modal = document.getElementById(modalID);
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}
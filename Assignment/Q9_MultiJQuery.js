// Q9 - Using two jQuery versions with noConflict

// First loaded (1.12.4) will be replaced when second version loads,
// so we capture references using noConflict.
var jq1 = jQuery.noConflict(true); // for jQuery 1
var jq2 = jQuery.noConflict(true); // for jQuery 2

// Version 1 → carousel slider rotation
jq1(function () {
    var $items = jq1("#carousel .carousel-item");
    var index = 0;
    setInterval(function () {
        $items.removeClass("active");
        index = (index + 1) % $items.length;
        $items.eq(index).addClass("active");
    }, 3000);

    // Version 1 → highlight active widget (click)
    jq1("#widgets .widget").on("click", function () {
        jq1("#widgets .widget").removeClass("active-widget");
        jq1(this).addClass("active-widget");
    });
});

// Version 2 → modal popups and tooltips
jq2(function () {
    // Modal open/close
    jq2("#open-modal").on("click", function () {
        jq2("#modal").fadeIn();
    });
    jq2("#close-modal").on("click", function () {
        jq2("#modal").fadeOut();
    });

    // Tooltips on hover
    jq2("#widgets .widget").hover(
        function (e) {
            var text = jq2(this).data("tooltip");
            jq2("#tooltip")
                .text(text)
                .css({ top: e.pageY + 5, left: e.pageX + 5 })
                .show();
        },
        function () {
            jq2("#tooltip").hide();
        }
    ).mousemove(function (e) {
        jq2("#tooltip").css({ top: e.pageY + 5, left: e.pageX + 5 });
    });
});

// Q4 - Special Offer Banner effects with jQuery

$(document).ready(function () {
    const $banners = $("#banners .banner");

    $("#hide-banners").on("click", function () {
        $banners.hide();
    });

    $("#show-banners").on("click", function () {
        $banners.show();
    });

    $("#slide-toggle").on("click", function () {
        $banners.slideToggle();
    });

    $("#fade-toggle").on("click", function () {
        $banners.fadeToggle();
    });

    // 5. Rotate banners every 5 seconds
    let currentIndex = 0;
    $banners.hide().eq(0).show();

    setInterval(function () {
        const prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % $banners.length;
        $banners.eq(prevIndex).fadeOut(500, function () {
            $banners.eq(currentIndex).fadeIn(500);
        });
    }, 5000);
});

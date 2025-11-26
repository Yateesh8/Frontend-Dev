// Q2 - Product Highlight with jQuery

$(document).ready(function () {
    // 1. Click on a product → highlight background
    $(".product").on("click", function () {
        $(".product").removeClass("highlight");
        $(this).addClass("highlight");

        // 5. If out of stock, show alert
        const stock = $(this).data("stock");
        if (stock === "out") {
            alert("This product is out of stock!");
        }
    });

    // 2. Hover over product → show/hide additional details
    $(".product").hover(
        function () {
            $(this).find(".details").stop(true, true).slideDown(200);
        },
        function () {
            $(this).find(".details").stop(true, true).slideUp(200);
        }
    );

    // 3. Clicking a “Favorite” icon → toggles a “selected” class
    $(".favorite").on("click", function (event) {
        event.stopPropagation(); // avoid triggering product click
        $(this).toggleClass("selected");
    });

    // 4. Apply different styles to products with discounts using attribute selector
    $("[data-discount='true']").css({
        borderColor: "green",
        boxShadow: "0 0 5px rgba(0,128,0,0.5)"
    });
});

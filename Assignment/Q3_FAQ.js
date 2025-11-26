// Q3 - Interactive FAQ using jQuery

$(document).ready(function () {
    // 1. Click question → toggle its answer
    $(".question").on("click", function () {
        $(this).next(".answer").slideToggle();
    });

    // 2. Hover → change question color
    $(".question").hover(
        function () {
            $(this).css("color", "#0984e3");
        },
        function () {
            $(this).css("color", "");
        }
    );

    // 3. Double-click question → collapse all answers
    $(".question").on("dblclick", function () {
        $(".answer").slideUp();
    });

    // 4. Focus on answer input → highlight parent question
    $(".answer-input").on("focus", function () {
        $(this).closest(".faq-item").addClass("highlight-parent");
    });

    // 5. Blur from input → reset background color
    $(".answer-input").on("blur", function () {
        $(this).closest(".faq-item").removeClass("highlight-parent");
    });
});

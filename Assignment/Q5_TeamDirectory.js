// Q5 - Team Members Directory with jQuery traversal

$(document).ready(function () {
    // 1. Click manager → highlight all direct reports
    $(".manager").on("click", function () {
        $(".employee").removeClass("highlight");
        $(this)
            .siblings(".employee-list")
            .children(".employee")
            .addClass("highlight");
    });

    // 2. Hover employee → show contact info using .next()
    $(".employee").hover(
        function () {
            $(this).children(".contact").stop(true, true).fadeIn(200);
        },
        function () {
            $(this).children(".contact").stop(true, true).fadeOut(200);
        }
    );

    // 3. Click department → change background of all members in that department using .children()
    $(".department-title").on("click", function () {
        $(".department").removeClass("highlight");
        const $dept = $(this).parent(".department");
        $dept.addClass("highlight");
        $dept.children(".employee-list").children(".employee").addClass("highlight");
    });

    // 4. Select random employee → highlight sibling employees
    $("#random-highlight").on("click", function () {
        const $employees = $(".employee");
        const randomIndex = Math.floor(Math.random() * $employees.length);
        const $chosen = $employees.eq(randomIndex);
        $employees.removeClass("highlight");
        $chosen.siblings(".employee").addClass("highlight");
    });

    // 5. Collapse/expand team using .parent() and .find()
    $(".department-title").on("dblclick", function () {
        const $dept = $(this).parent(".department");
        $dept.toggleClass("collapsed");
    });
});

// Q7 - Search Courses using jQuery

$(document).ready(function () {
    function filterCourses() {
        const query = $("#search-input").val().toLowerCase();
        let matchCount = 0;

        $(".course").each(function () {
            const text = $(this).text();
            const lower = text.toLowerCase();

            // Reset previous highlight
            $(this).html(text);

            if (lower.includes(query) && query !== "") {
                $(this).show();
                matchCount++;

                // 2. Highlight matched text using .css() (wrap in span)
                const regex = new RegExp("(" + query + ")", "ig");
                const newHtml = text.replace(regex, "<span class='highlight'>$1</span>");
                $(this).html(newHtml);
            } else if (query === "") {
                $(this).show();
            } else {
                // 3. Toggle visibility of non-matching courses
                $(this).hide();
            }
        });

        $("#match-count").text(matchCount);
    }

    // 1. Real-time filter on keyup
    $("#search-input").on("keyup", filterCourses);

    // 5. Clear search and reset list
    $("#clear-search").on("click", function () {
        $("#search-input").val("");
        $(".course").each(function () {
            $(this).show();
            $(this).html($(this).text());
        });
        $("#match-count").text("0");
    });
});

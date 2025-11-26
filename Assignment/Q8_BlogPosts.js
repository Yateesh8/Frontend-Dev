// Q8 - Dynamic Blog Posts using jQuery DOM methods

$(document).ready(function () {
    let counter = 1;

    // 1. Append a new post
    $("#add-post").on("click", function () {
        const $post = $("<div class='post'></div>");
        $post.append("<span class='tag'>#new</span>");
        $post.append(`<h2>New Post ${counter}</h2>`);
        $post.append("<p>This is a newly added post.</p>");
        $("#posts").append($post);
        counter++;
    });

    // 2. Prepend featured post
    $("#prepend-post").on("click", function () {
        const $post = $("<div class='post'></div>");
        $post.append("<span class='tag'>#featured</span>");
        $post.append("<h2>Featured Post</h2>");
        $post.append("<p>This post is at the top.</p>");
        $("#posts").prepend($post);
    });

    // 3. Remove last post
    $("#remove-last-post").on("click", function () {
        $("#posts .post").last().remove();
    });

    // 4. Add tags before/after using .before()/.after()
    $("#posts .post").each(function () {
        $(this).find("h2").before("<span class='tag'>#post</span>");
        $(this).find("h2").after("<span class='tag'>#read</span>");
    });

    // 5. Highlight posts with specific keywords
    $("#highlight-keyword").on("click", function () {
        const keyword = $("#keyword-input").val().toLowerCase();
        $("#posts .post").removeClass("highlight");

        if (!keyword) return;

        $("#posts .post").each(function () {
            const text = $(this).text().toLowerCase();
            if (text.includes(keyword)) {
                $(this).addClass("highlight");
            }
        });
    });
});

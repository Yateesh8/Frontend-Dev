// Q6 - Event Subscription Panel using jQuery

$(document).ready(function () {
    let notificationsEnabled = false;

    function showMessage(text) {
        $("#messages").text(text);
    }

    // 1. Subscribe → enable notifications
    $("#subscribe-btn").on("click", function () {
        notificationsEnabled = true;
        $(".topic").addClass("subscribed");
        showMessage("You are subscribed to notifications.");
    });

    // 2. Unsubscribe → disable notifications
    $("#unsubscribe-btn").on("click", function () {
        notificationsEnabled = false;
        $(".topic").removeClass("subscribed");
        showMessage("You have unsubscribed from notifications.");
    });

    // Topic click handler (attached via .on for dynamic elements)
    function topicClickHandler() {
        if (!notificationsEnabled) {
            showMessage("Enable subscription to manage topics.");
            return;
        }
        $(this).toggleClass("subscribed");
        showMessage("Topic preference updated.");
    }

    // 3. Dynamically add new topics
    $("#add-topic-btn").on("click", function () {
        const name = $("#new-topic-input").val().trim();
        if (!name) return;
        const $newTopic = $("<div></div>")
            .addClass("topic")
            .text(name);
        $("#topics-container").append($newTopic);
        $("#new-topic-input").val("");
    });

    // Attach handler for existing & future topics using .on()
    $("#topics-container").on("click", ".topic", topicClickHandler);

    // 4. Example of removing specific subscription → detach .off() event from first topic
    // (for demo: double-click first topic to remove its click handler)
    $("#topics-container").on("dblclick", ".topic:first", function () {
        $("#topics-container").off("click", ".topic", topicClickHandler);
        showMessage("Topic click handling removed using .off().");
    });
});

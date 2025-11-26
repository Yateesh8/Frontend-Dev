// Q1 - Welcome Page Greeting using jQuery

// Utility to decide greeting based on current hour
function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
}

$(document).ready(function () {
    // 1. On page load, show time-based greeting
    $("#main-greeting").text(getTimeBasedGreeting());

    // 2. Button to change greeting to motivational quote
    $("#change-greeting-btn").on("click", function () {
        $("#main-greeting").text("Keep pushing your limits! 💪");
    });

    // 3. Toggle visibility of welcome message
    $("#toggle-message-btn").on("click", function () {
        $("#welcome-message").toggle();
    });

    // 4. Alert when greeting is clicked
    $("#main-greeting").on("click", function () {
        alert("Greeting clicked!");
    });
});

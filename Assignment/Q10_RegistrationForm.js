// Q10 - Registration Form Validation using jQuery

$(document).ready(function () {
    // Simulated existing emails for uniqueness check
    const existingEmails = ["test@example.com", "user@domain.com", "admin@site.com"];

    $("#reg-form").on("submit", function (e) {
        e.preventDefault();
        let isValid = true;
        $("#form-message").text("");
        $("input").removeClass("error");

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val().trim();

        // 1. Check Name field → not empty
        if (!name) {
            $("#name").addClass("error");
            isValid = false;
        }

        // 2. Check Email format and uniqueness
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            $("#email").addClass("error");
            isValid = false;
        } else if (existingEmails.includes(email.toLowerCase())) {
            $("#email").addClass("error");
            isValid = false;
            $("#form-message").text("Email already in use.");
        }

        // 3. Check Password → minimum 8 characters
        if (!password || password.length < 8) {
            $("#password").addClass("error");
            isValid = false;
        }

        // 4. Show success message if all fields valid
        if (isValid) {
            $("#form-message").text("Registration successful!");
        }
    });
});

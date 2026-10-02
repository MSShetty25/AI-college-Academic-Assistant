document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (username === "" || password === "") {
        message.textContent = "Please enter all details.";
        return;
    }

    // Temporary login for frontend testing
    if (username === "student" && password === "1234") {

        message.textContent = "Login successful!";

        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {

        message.textContent =
            "Invalid login. For testing use student / 1234.";

    }

});
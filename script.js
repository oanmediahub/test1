function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function authenticateUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Store usernames and passwords in an array (for testing purposes)
    var users = [
        { username: "admin", password: "admin" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" }
    ];

    // Check if the entered credentials match any stored user
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            // Authentication successful, redirect to home.html
            window.location.href = "home.html";
            return;
        }
    }

    // Authentication failed
    alert("Invalid username or password");
}

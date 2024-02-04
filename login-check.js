// Simple login check
function checkLogin() {
    var isLoggedIn = sessionStorage.getItem('loggedIn');

    if (!isLoggedIn) {
        alert('You must be logged in to view the gallery.');
        window.location.href = 'login.html';
    }
}

// Check login status on page load
document.addEventListener('DOMContentLoaded', checkLogin);

function login() {
    // Simulating user authentication
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check credentials (for demonstration purposes)
    if (username === 'admin' && password === 'adminpassword') {
        window.location.href = 'admin.html';
    } else if (username === 'editor' && password === 'editorpassword') {
        window.location.href = 'editor.html';
    } else if (username === 'contributor' && password === 'contributorpassword') {
        window.location.href = 'contributor.html';
    } else if (username === 'member' && password === 'memberpassword') {
        window.location.href = 'member.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

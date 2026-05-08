// Stored credentials in a JavaScript object
const users = {
    username: 'ethan R',
    password: 'rwakinang4',
}

// Handle login form submission on index.html
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;
        
        // Validate credentials
        if (enteredUsername === users.username && enteredPassword === users.password) {
            // Success - redirect to page.html
            window.location.href = 'page.html';
        } else {
            // Error
            messageDiv.textContent = '✗ Invalid username or password!';
            messageDiv.className = 'message error';
            passwordInput.value = '';
        }
    });
}

// Handle logout button on page.html
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        // Redirect back to login page
        window.location.href = 'index.html';
    });
}

// Stored credentials in a JavaScript object
const users = {
    username: 'ethan R',
    password: 'rwakinang4',
}

// Get form elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');
const loginSection = document.getElementById('login-section');
const mainContent = document.getElementById('main-content');
const logoutBtn = document.getElementById('logoutBtn');

// Handle form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;
    
    // Validate credentials
    if (enteredUsername === users.username && enteredPassword === users.password) {
        // Success - hide login and show main content
        loginSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        messageDiv.textContent = '';
    } else {
        // Error
        messageDiv.textContent = '✗ Invalid username or password!';
        messageDiv.className = 'message error';
        passwordInput.value = '';
    }
});

// Handle logout
logoutBtn.addEventListener('click', function() {
    // Hide main content and show login
    mainContent.classList.add('hidden');
    loginSection.classList.remove('hidden');
    // Clear form
    usernameInput.value = '';
    passwordInput.value = '';
    messageDiv.textContent = '';
});

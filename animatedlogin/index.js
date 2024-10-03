// Retrieve users from localStorage or initialize an empty array
let users = JSON.parse(localStorage.getItem('users')) || [];

// Handle form submission for login/register
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');
const formTitle = document.getElementById('form-title');
const submitButton = document.getElementById('submit-button');
const toggleFormLink = document.getElementById('toggle-form');

let isRegistering = false; // Switch between login and register mode

// Handle form switch between login and register
toggleFormLink.addEventListener('click', function (e) {
    e.preventDefault();
    isRegistering = !isRegistering;
    
    if (isRegistering) {
        formTitle.textContent = 'Register';
        submitButton.textContent = 'Register';
        toggleFormLink.textContent = 'Already have an account? Login';
    } else {
        formTitle.textContent = 'Login';
        submitButton.textContent = 'Login';
        toggleFormLink.textContent = 'Don\'t have an account? Register';
    }
});

// Handle form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isRegistering) {
        // Register new user
        if (users.find(user => user.username === username)) {1
            errorMessage.textContent = 'Username already exists!';
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! You can now log in.');
            toggleFormLink.click(); // Switch to login mode after registration
        }
    } else {
        // Login existing user
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful! Redirecting to secured page...');
            window.location.href = 'securepage/secured.html'; // Redirect to secured page
        } else {
            errorMessage.textContent = 'Invalid username or password!';
        }
    }
});

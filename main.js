document.addEventListener('DOMContentLoaded', function() {

// Get form elements
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const errorMessage = document.getElementById('error-message');

// Handle form submission
form.addEventListener('submit', e => {
  e.preventDefault();

  // Validate form fields
  if (name.value === '' || email.value === '' || password.value === '' || passwordConfirm.value === '') {
    errorMessage.textContent = 'Please fill out all fields';
    return;
  }

  if (password.value !== passwordConfirm.value) {
    errorMessage.textContent = 'Passwords do not match';
    return;
  }

  // Send form data to server for further validation and processing
  // Example using fetch API
  fetch('/signup', {
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value
    }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      errorMessage.textContent = data.error;
    } else {
      // Redirect to thank-you page
      window.location.href = '/thank-you';
    }
  })
  .catch(err => console.error(err));
});
});

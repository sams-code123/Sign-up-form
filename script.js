
// Get references to DOM elements
let pass1Input = document.getElementById('pass1');
let pass2Input = document.getElementById('pass2');
let form = document.getElementById('signup');

// Add submit event listener to the form
form.addEventListener('submit', (event) => {
    // Get the current values of the input fields
    let pass1 = pass1Input.value;
    let pass2 = pass2Input.value;

    // Check if the passwords match
    if (pass1 !== pass2) {
        alert('Passwords do not match.');
        // Prevent the form from submitting
        event.preventDefault();
    } 
});


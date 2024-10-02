document.getElementById('password').addEventListener('input', function() {
    const password = this.value;

    // Regular expressions for validation
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const number = /[0-9]/;
    const capitalLetter = /[A-Z]/;
    const smallLetter = /[a-z]/;

    // Validate Special Character
    if (specialChar.test(password)) {
        document.getElementById('specialCharCircle').classList.remove('invalid');
        document.getElementById('specialCharCircle').classList.add('valid');
        document.getElementById('specialCharText').classList.remove('invalid-text');
        document.getElementById('specialCharText').classList.add('valid-text');
    } else {
        document.getElementById('specialCharCircle').classList.remove('valid');
        document.getElementById('specialCharCircle').classList.add('invalid');
        document.getElementById('specialCharText').classList.remove('valid-text');
        document.getElementById('specialCharText').classList.add('invalid-text');
    }

    // Validate Number
    if (number.test(password)) {
        document.getElementById('numberCircle').classList.remove('invalid');
        document.getElementById('numberCircle').classList.add('valid');
        document.getElementById('numberText').classList.remove('invalid-text');
        document.getElementById('numberText').classList.add('valid-text');
    } else {
        document.getElementById('numberCircle').classList.remove('valid');
        document.getElementById('numberCircle').classList.add('invalid');
        document.getElementById('numberText').classList.remove('valid-text');
        document.getElementById('numberText').classList.add('invalid-text');
    }

    // Validate Capital Letter
    if (capitalLetter.test(password)) {
        document.getElementById('capitalLetterCircle').classList.remove('invalid');
        document.getElementById('capitalLetterCircle').classList.add('valid');
        document.getElementById('capitalLetterText').classList.remove('invalid-text');
        document.getElementById('capitalLetterText').classList.add('valid-text');
    } else {
        document.getElementById('capitalLetterCircle').classList.remove('valid');
        document.getElementById('capitalLetterCircle').classList.add('invalid');
        document.getElementById('capitalLetterText').classList.remove('valid-text');
        document.getElementById('capitalLetterText').classList.add('invalid-text');
    }

    // Validate Small Letter
    if (smallLetter.test(password)) {
        document.getElementById('smallLetterCircle').classList.remove('invalid');
        document.getElementById('smallLetterCircle').classList.add('valid');
        document.getElementById('smallLetterText').classList.remove('invalid-text');
        document.getElementById('smallLetterText').classList.add('valid-text');
    } else {
        document.getElementById('smallLetterCircle').classList.remove('valid');
        document.getElementById('smallLetterCircle').classList.add('invalid');
        document.getElementById('smallLetterText').classList.remove('valid-text');
        document.getElementById('smallLetterText').classList.add('invalid-text');
    }

    checkPasswordMatch();
});

// Confirm Password Validation
document.getElementById('confirmPassword').addEventListener('input', checkPasswordMatch);

function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword && password !== "") {
        document.getElementById('confirmMatch').classList.remove('invalid');
        document.getElementById('confirmMatch').classList.add('valid');
        document.getElementById('confirmMatch').textContent = "Passwords match";
    } else {
        document.getElementById('confirmMatch').classList.remove('valid');
        document.getElementById('confirmMatch').classList.add('invalid');
        document.getElementById('confirmMatch').textContent = "Passwords must match";
    }
}

// Form Submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if all password criteria are met and passwords match
    const isValidPassword = document.querySelectorAll('.valid').length === 4;
    const passwordsMatch = password === confirmPassword;

    if (isValidPassword && passwordsMatch) {
        alert('Registration Successful!');

        // Clear form inputs after successful registration
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';

        // Reset validation indicators
        document.querySelectorAll('.circle').forEach(function(circle) {
            circle.classList.remove('valid');
            circle.classList.add('invalid');
        });

        document.querySelectorAll('.valid-text').forEach(function(text) {
            text.classList.remove('valid-text');
            text.classList.add('invalid-text');
        });

        document.getElementById('confirmMatch').classList.remove('valid');
        document.getElementById('confirmMatch').classList.add('invalid');
        document.getElementById('confirmMatch').textContent = "Passwords must match";
    } else {
        alert('Registration Successfully');
        // Clear form inputs after successful registration
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';

        // Reset validation indicators
        document.querySelectorAll('.circle').forEach(function(circle) {
            circle.classList.remove('valid');
            circle.classList.add('invalid');
        });

        document.querySelectorAll('.valid-text').forEach(function(text) {
            text.classList.remove('valid-text');
            text.classList.add('invalid-text');
        });

        document.getElementById('confirmMatch').classList.remove('valid');
        document.getElementById('confirmMatch').classList.add('invalid');
        document.getElementById('confirmMatch').textContent = "Passwords must match";
    }
});

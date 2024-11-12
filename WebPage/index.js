function redirect(){
    window.location.href = "form.html"; 
}
function validateForm() {
        const username = document.forms["registrationForm"]["username"].value;
        const email = document.forms["registrationForm"]["email"].value;
        const password = document.forms["registrationForm"]["password"].value;
        const confirmPassword = document.forms["registrationForm"]["confirm_password"].value;


        let isValid = true;
        // Check for empty fields
        if (!username || !email || !password || !confirmPassword) {
            alert("All fields are required.");
            return false;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Check password length
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        if (isValid) {
            // Hide the form
            document.getElementById('registrationForm').style.display = 'none';
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
        }

        // If all validations pass
        return false;
    }


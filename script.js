<script>
function validateForm() {
    // Get values
    var fname = document.forms["regForm"]["firstname"].value;
    var lname = document.forms["regForm"]["Lastname"].value;
    var phone = document.forms["regForm"]["phone"].value;
    var email = document.forms["regForm"]["email"].value;
    var pass = document.forms["regForm"]["pass"].value;
    var repass = document.forms["regForm"]["repass"].value;

    // Gender check
    var gender = document.querySelector('input[name="gender"]:checked');

    // Empty field check
    if (fname === "" || lname === "" || phone === "" || email === "" || pass === "" || repass === "") {
        alert("Please fill all required fields");
        return false;
    }

    // Phone number validation
    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    // Password match check
    if (pass !== repass) {
        alert("Passwords do not match");
        return false;
    }

    // Gender check
    if (!gender) {
        alert("Please select your gender");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
</script>


`use strict`

// TO DO:
    // - Capture data entered
    // - Use first name in alert to thank them for registering - done
    // - Validate the no field is blank - https://www.w3schools.com/js/js_validation.asp
    // - Validate that userName is not already being used
    // - Validate that email address is not already registered

function registrationHandler() {
    var form = document.getElementById(`registrationForm`);
    form.addEventListener(`submit`, registered);

    function user(firstName, lastName, email, userName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        };

     
    function registered (e) {//will probably need to separate so that verification can complete before storing
        e.preventDefault();
        var firstNameValue = document.getElementById(`firstNameInput`);
        localStorage.setItem('firstNameInput', firstNameValue.value);
        var lastNameValue = document.getElementById('lastNameInput');
        localStorage.setItem('lastNameInput', lastNameValue.value);
        var emailValue = document.getElementById('emailInput');
        // function validateEmail () {
        //     var 
        // }
        localStorage.setItem('emailInput', emailValue.value);
        // Can I validate that the email entered is valid?
        var userNameValue = document.getElementById('userNameInput');
        localStorage.setItem('userNameInput', userNameValue.value);
        // Need to validate that this username is not already being used or do I use the email address? Use the email address.
        var passwordValue = document.getElementById('passwordInput');
        localStorage.setItem('passwordInput', passwordValue.value);

        alert(`Thank you, ${firstNameValue.value} for registering!  Your user name is ${userNameValue.value}.`);
    }
    };

module.exports = {
    registered,
    user,
};

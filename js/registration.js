`use strict`

// TO DO:
    // - Capture data entered
    // - Use first name in alert to thank them for registering - done
    // - Validate the no field is blank - https://www.w3schools.com/js/js_validation.asp
    // - Validate that userName is not already being used
    // - Validate that email address is not already registered


var form = document.getElementById(`registrationForm`);
form.addEventListener(`submit`, registered, );



function user(firstName, lastName, email, userName, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userName = userName;
    this.password = password;
    };

    // var formData = {
    //     "firstName" : this.firstName.value,
    //     "lastName" : this.lastName.value,
    //     "email" : this.email.value,
    //     "userName" : this.userName.value,
    //     "password" : this.password.value
    // };
    
    
    
function registered (e) {
    e.preventDefault();
    var firstNameValue = document.getElementById(`firstNameInput`);
    localStorage.setItem('firstNameInput', firstNameValue.value);
    var lastNameValue = document.getElementById('lastNameInput');
    localStorage.setItem('lastNameInput', lastNameValue.value);
    var emailValue = document.getElementById('emailInput');
    localStorage.setItem('emailInput', emailValue.value);
    var userNameValue = document.getElementById('userNameInput');
    localStorage.setItem('userNameInput', userNameValue.value);
    var passwordValue = document.getElementById('passwordInput');
    localStorage.setItem('passwordInput', passwordValue.value);

    // localStorage.setItem("formData", JSON.stringify(formData));
    alert(`Thank you, ${firstNameValue.value} for registering!  Your user name is ${userNameValue.value}.`);
};

// var firstNameValue = document.getElementById('firstNameInput');

// var userNameValue = document.getElementById('userNameInput');



// var formData = {
//     "firstName" : this.firstName.value,
//     "lastName" : this.lastName.value,
//     "email" : this.email.value,
//     "userName" : this.userName.value,
//     "password" : this.password.value
// };

// function saveToStorage() {
//         localStorage.setItem("formData", JSON.stringify(formData));
//       }

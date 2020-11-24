`use strict`

// TO DO:
    // - Capture data entered
    // - Use first name in alert to thank them for registering - done
    // - Validate the no field is blank - https://www.w3schools.com/js/js_validation.asp
    // - Validate that userName is not already being used
    // - Validate that email address is not already registered


var form = document.getElementById(`registrationForm`);
form.addEventListener(`submit`, registered);



function user(firstName, lastName, email, userName, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userName = userName;
    this.password = password;
    };

    
    
function registered (e) {
    e.preventDefault();
    var userFirstNameValue = document.getElementById(`firstName`).value;
    var userNameFinal = document.getElementById('userName').value;
    alert(`Thank you, ${userFirstNameValue} for registering!  Your user name is ${userNameFinal}.`);
};

// var firstName = document.getElementById('firstName').value;
// var lastName = document.getElementById('lastName').value;
// var email = document.getElementById('email').value;
// var userName = document.getElementById('userName').value;
// var password = document.getElementById('password').value;
// localStorage.setItem('firstName', firstName);
// localStorage.setItem('lastName', lastName);
// localStorage.setItem('email', email);
// localStorage.setItem('userName', userName);
// localStorage.setItem('password', password);


var formData = {
    "firstName" : this.firstName.value,
    "lastName" : this.lastName.value,
    "email" : this.email.value,
    "userName" : this.userName.value,
    "password" : this.password.value
};

function saveToStorage() {
        localStorage.setItem("formData", JSON.stringify(formData));
      }

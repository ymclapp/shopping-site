`use strict`

const client = require('../../util/db');
// TO DO:
    // - Capture data entered
    // - Use first name in alert to thank them for registering - done
    // - Validate the no field is blank - https://www.w3schools.com/js/js_validation.asp
    // - Validate that userName is not already being used
    // - Validate that email address is not already registered

// function registrationHandler() {

    const errorModule = require('./errors');
    
    function showRegistrationForm(request, response) {
        response.render('pages/registration');        
    }

    function user(firstName, lastName, email, userName, password) {
        var form = document.getElementById(`registrationForm`);
        form.addEventListener(`submit`, registered);
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
    // }
    };

    function addUser (request, response) {
        console.log('POST /registration', request.body);
        const { firstName, lastName, email, userName, password } = request.body;
        response.send({firstName})  //Keith's demo showed title - why?  It is not the primary key or required
        const SQL = 
        'INSERT INTO users (firstName, lastName, email, userName, password) VALUES ($1, $2, $3, $4, $5) RETURNING Id';

        const values = [firstName, lastName, email, userName, password];
        client.query(SQL, values)
            .then(() => {
                // let id = results.rows[0].id;
                    response.redirect('/myAccount');
            })
            .catch(err => {
                errorHandler(err, response);
            });
    };


module.exports = {
    registered,
    user,
    addUser,
    showRegistrationForm,
};

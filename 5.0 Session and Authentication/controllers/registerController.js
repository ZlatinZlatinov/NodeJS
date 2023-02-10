const { findByUsername, createUser } = require('../services/userService');
const { body, validationResult } = require('express-validator'); // Using express validator library

const registerController = require('express').Router();

registerController.get('/', (req, res) => {
    res.render('register');
});

// To do: post method to register user: done! 

// ----- Update: aded middleware validation to the register controller to validate data from the input fields

registerController.post('/', 
    body('username') // Data validation starts here
        .trim()
        .toLowerCase()
        .isLength({ min: 5 }).withMessage('Username must be atleast 5 characters long!').bail()
        .isAlphanumeric().withMessage('Username must include only english letters and numbers!').bail()
        .custom(value => {
            return findByUsername(value).then(user => { // findByUsername returns an array, if there is no user its empty array
                if (user[0]) {
                    return Promise.reject(`Username ${user[0].username} is taken!`);
                }
            });
        }),
    body('password')
        .trim()
        .isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long!')
        .isAlphanumeric().withMessage('Password must include only english letters and numbers!'),
    body('repass')
        .trim()
        .custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error('Password and repeat passowrd fields must be equal!');
            }
            return true;
        }), // Data validation ends here
    async (req, res) => {
        const { username, password } = req.body;
        try {
            const { errors } = validationResult(req); // by default validationResult retursn an object;

            if (errors.length > 0) {
                throw errors;
            }

            await createUser(username, password);
            res.redirect('/login');
        } catch (err) {
            const errors = Array.from(err).map((o) => {
                return { msg: o.msg }
            });

            res.render('register', {
                errors,
                userName: username
            });
        } 

        //>>>> I will no longer use the code down there but it will stay for now <<<<<///

        //Add validattion if the username alreday exists
        /*const user = await findByUsername(username.toLowerCase()); // db could throw eror too :/
        if (user[0]) {
            const errUsr = 'Username already  taken!'
            res.render('register', { errUsr });
            return;
        }
    
        // I guess those operations could be in a middleware bu idk..
        // Now, I will add them in a middleware!! Using express-validator!
        // check if password and repeat password match 
        // if not display error on the client 
        if (password != repass || password.length < 6) {
            const errPass = 'Passwords must be equal and 6 or more characters long!';
            res.render('register', { errPass });
            return;
        }*/

        //await createUser(username.toLowerCase(), password);
        // if those are met, save the new user to the database 
        // set him a token I guess ?!?!?
        //and redirect him to the login page 

        //res.redirect('/login');
    });

module.exports = registerController;
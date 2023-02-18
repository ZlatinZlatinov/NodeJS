const { createUser } = require('../sevices/userService');

const registerController = require('express').Router(); 
const {body, validationResult} = require('express-validator');

registerController.get('/', (req, res) => {
    res.render('register');
});

registerController.post('/',
body('username')
        .trim()
        .toLowerCase()
        .isLength({ min: 5 }).withMessage('Username must be atleast 5 characters long!').bail()
        .custom(username => {
            return findByUsername(username).then(user => {
                if (user[0]) {
                    return Promise.reject(`Username ${username} is already taken!`);
                }
            });
        }),
    body('email')
        .trim()
        .isLength({ min: 10 }).withMessage('Email must be atleast 10 characters long!'),
    body('password')
        .trim()
        .isLength({ min: 4 }).withMessage('Password must be atleast 4 characters long!'),
    body('rePass')
        .trim()
        .custom((rePass, { req }) => {
            if (rePass != req.body.password) {
                throw new Error('Password and repeat password fields must be equal!');
            }

            return true;
        }),
async (req, res) => { 
    const { username, password, rePass } = req.body;
    //TODO: Add data validation!
    await createUser(username, password); 
    res.redirect('/login')// check assignment requirements!
});

module.exports = registerController;
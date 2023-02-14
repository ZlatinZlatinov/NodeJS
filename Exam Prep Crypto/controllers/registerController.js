const { createUser } = require('../sevices/userService');
const { body, validationResult } = require('express-validator');
const { findByUsername } = require('../sevices/userService');

const registerController = require('express').Router();

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
                    return Promise.reject(`Username ${username} is alredy taken!`);
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
        if (req.isUser) {
            res.redirect('/');
            return;
        }

        const { username, email, password, rePass } = req.body;

        try {
            for (let element of [username, email, password, rePass]) {
                if (element == '') {
                    throw [{ msg: 'All fields are required!' }];
                }
            }

            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            await createUser(username, email, password);
            res.redirect('/login')// check assignment requirements!
        } catch (err) {
            console.log(err);
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });

            res.render('register', {
                errors,
                userName: username,
                email,
                password,
                rePass
            });
        }
    });

module.exports = registerController;
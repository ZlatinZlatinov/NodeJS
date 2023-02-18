const registerController = require('express').Router();
const { createUser, findByUsername } = require('../sevices/userService');
const { body, validationResult } = require('express-validator');

registerController.get('/', (req, res) => {
    if (req.isUser) {
        res.redirect('/');
        return;
    }

    res.render('register');
});

registerController.post('/',
    body('username')
        .trim()
        .notEmpty().withMessage('All fields are required!')
        .toLowerCase()
        .isLength({ min: 4 }).withMessage('Username must be atleast 4 characters long!').bail()
        .custom(username => {
            return findByUsername(username).then(user => {
                if (user[0]) {
                    return Promise.reject(`Username ${username} is already taken!`);
                }
            });
        }),
    body('email')
        .trim()
        .notEmpty().withMessage('All fields are required!')
        .isLength({ min: 10 }).withMessage('Email must be atleast 10 characters long!'),
    body('password')
        .trim()
        .notEmpty().withMessage('All fields are required!')
        .isLength({ min: 3 }).withMessage('Password must be atleast 3 characters long!'),
    body('rePass')
        .trim()
        .notEmpty().withMessage('All fields are required!')
        .custom((rePass, { req }) => {
            if (rePass != req.body.password) {
                throw new Error('Password and confirm password fields must be equal!');
            }

            return true;
        }),
    async (req, res) => {
        const { username, /*email*/password, rePass } = req.body;
        //TODO: Add data validation! 
        try {
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            await createUser(username, password);

            //const [user] = await findUserByEmail(email);
            //const token = await logUser(username, user._id);
            //res.cookie('auth', token);
            //res.redirect('/');
            //res.redirect('/login')// check assignment requirements!
        } catch (err) {
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
const { createUser, findByUsername } = require('../services/userService');
const { body, validationResult } = require('express-validator');

const registerController = require('express').Router();

registerController.get('/', (req, res) => {
    if (req.isAuth) {
        res.redirect('/');
        return;
    }
    res.render('register');
});

registerController.post('/',
    body('username')
        .trim()
        .toLowerCase()
        .isLength({ min: 5 }).withMessage('Username must be atleast 5 characters long!')
        .isAlphanumeric().withMessage('Username must consist only english letters and numbers!').bail()
        .custom(username => {
            return findByUsername(username).then(user => {
                if (user[0]) {
                    return Promise.reject(`Username ${user[0].username} is already taken!`);
                }
            });
        }),
    body('password')
        .trim()
        .isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long!')
        .isAlphanumeric().withMessage('Password must consist of english letters and numbers!'),
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
        try {
            for (let element of [username, password, rePass]) {
                if (element == '') {
                    throw [{ msg: 'All fields are required!' }];
                } // moje i da go napraq da mqta masiv s obekt..ddz zaradi validatora posle
            }

            const { errors } = validationResult(req); // еrrors is an array of objects 

            if (errors.length > 0) {
                throw errors;
            }

            await createUser(username, password);
            res.redirect('/login');
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });

            res.render('register', {
                errors,
                userName: username,
                password,
                rePass
            });
        }
    });


module.exports = registerController;
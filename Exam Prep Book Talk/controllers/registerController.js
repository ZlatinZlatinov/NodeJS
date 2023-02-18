const { createUser, findByUsername, logUser, findUserByEmail } = require('../sevices/userService');
const { body, validationResult } = require('express-validator');
const registerController = require('express').Router();

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
        .isLength({ min: 10 }).withMessage('Email must be atleast 10 characters long!'),
    body('password')
        .trim()
        .isLength({ min: 3 }).withMessage('Password must be atleast 3 characters long!'),
    body('rePass')
        .trim()
        .custom((rePass, { req }) => {
            if (rePass != req.body.password) {
                throw new Error('Password and confirm password fields must be equal!');
            }

            return true;
        }),
    async (req, res) => {
        const { email, username, password, rePass } = req.body; 
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
            const [user] = await findUserByEmail(email); 
    
            const token = await logUser(username, user._id);
            res.cookie('auth', token);
            res.redirect('/');
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
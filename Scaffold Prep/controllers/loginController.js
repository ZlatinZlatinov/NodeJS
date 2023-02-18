const { logUser } = require('../sevices/userService');
const { findByUsername, logUser, findUserByEmail } = require('../sevices/userService');
const { checkPassword } = require('../sevices/bcryptService');

const loginController = require('express').Router();

loginController.get('/', (req, res) => {
    if (req.isUser) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

loginController.post('/', async (req, res) => {
    //TODO: change to username or email according to the assignment

    const { username, password } = req.body;
    try {
        if (email == '' || password == '') {
            throw new Error('No empty fields are allowed!');
        }

        //const [user] = await findByUsername(username);
        const [user] = await findUserByEmail(email);

        if (!user) {
            throw new Error('Wrong username or password!');
        }

        const verifyPassword = await checkPassword(password, user.password);

        if (!verifyPassword) {
            throw new Error('Wrong username or password!');
        }

        const username = user.username;
        const token = await logUser(username, user._id);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        const errors = err.message;
        res.render('login', {
            email,
            errors
        });
    }
});

module.exports = loginController;
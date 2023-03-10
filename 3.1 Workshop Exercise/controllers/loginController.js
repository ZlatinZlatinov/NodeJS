const loginController = require('express').Router();
const { findByUsername } = require('../services/userService');
const { checkPassword } = require('../services/bcryptService');
const { signToken } = require('../services/tokenService');


loginController.get('/', (req, res) => {
    if (req.isAuth) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

loginController.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username == '' || password == '') {
            throw new Error('No empty fields are allowed!');
        }

        const [user] = await findByUsername(username);

        if (!user) {
            throw new Error('Wrong username or password!');
        }

        const verifyPassword = await checkPassword(password, user.password);

        if (!verifyPassword) {
            throw new Error('Wrong username or password!');
        }

        const id = user._id;
        const token = signToken({ id, username });

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        const errors = err.message;
        res.render('login', {
            userName: username,
            errors
        });
    }
});

module.exports = loginController; 
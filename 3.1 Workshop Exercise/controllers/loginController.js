const loginController = require('express').Router();
const { findByUsername } = require('../services/userService');
const { checkPassword } = require('../services/bcryptService');
const { signToken } = require('../services/tokenService');

loginController.get('/', (req, res) => {
    res.render('login');
});

loginController.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [user] = await findByUsername(username);
        const verifyPassword = await checkPassword(password, user.password);
        if (user == undefined || verifyPassword == false) {
            throw new Error('Wrong username or password!');
        }

        const id = user._id;
        const token = signToken({ id, username });
        
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        // to do: add data validation and display proper views!
        console.log('---> ',err.message);
        res.redirect('/login');
    }
});

module.exports = loginController; 
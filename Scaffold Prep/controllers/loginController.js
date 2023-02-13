const { logUser } = require('../sevices/userService'); 
const { findByUsername } = require('../sevices/userService'); 
const { checkPassword } = require('../sevices/bcryptService');

const loginController = require('express').Router();

loginController.get('/', (req, res) => {
    res.render('login');
});

loginController.post('/', async (req, res) => {
    const { username, password } = req.body;
    //TODO: add data validation! 

    const [user] = await findByUsername(username);
    const verifyPassword = await checkPassword(password, user.password);
    // if all clear log user 

    const token = await logUser(username, user._id);

    res.cookie('auth', token);
    res.redirect('/');

});

module.exports = loginController;
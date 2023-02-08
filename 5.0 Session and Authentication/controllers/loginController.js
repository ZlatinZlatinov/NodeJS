const { checkPassword } = require('../services/hashService');
const { signToken } = require('../services/tokenService');
const { findByUsername } = require('../services/userService');

const loginController = require('express').Router();

loginController.get('/', (req, res) => {
    res.render('login');
});

loginController.post('/', async (req, res) => {
    // To do: authenticate user comparare passowrds from database using bcrypt and hash it 
    // if conditions are not met, display error on the client 
    const { username, password } = req.body;
    const user = await findByUsername(username.toLowerCase());
    const verifiedPassword = await checkPassword(password, user.password);
    if (!user[0] || verifiedPassword == false) {
        const errUsr = 'Wrong username or password!';
        res.render('login', { errUsr });
        return;
    }
    // if met log user and send him to homepage with proper views
    const id = user[0]._id;
    console.log(id);
    const token = signToken({ id, username });
    res.cookie('auth', token);
    res.redirect('/');
});

module.exports = loginController;
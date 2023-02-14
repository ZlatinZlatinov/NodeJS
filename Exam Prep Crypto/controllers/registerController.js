const { createUser } = require('../sevices/userService');

const registerController = require('express').Router();

registerController.get('/', (req, res) => {
    res.render('register');
});

registerController.post('/', async (req, res) => { 
    const { username, password, rePass } = req.body;
    //TODO: Add data validation!
    await createUser(username, password); 
    res.redirect('/login')// check assignment requirements!
});

module.exports = registerController;
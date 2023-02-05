const registerController = require('express').Router();

registerController.get('/', (req, res) => {
    res.render('register');
}); 

// To do: post method to register user

module.exports = registerController;
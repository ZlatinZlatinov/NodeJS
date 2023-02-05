const loginController = require('express').Router(); 

loginController.get('/', (req, res) =>{
    res.render('login');
}); 

// It would have and post 

module.exports = loginController;
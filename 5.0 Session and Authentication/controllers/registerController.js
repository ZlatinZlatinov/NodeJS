const { findByUsername, createUser } = require('../services/userService');

const registerController = require('express').Router();

registerController.get('/', (req, res) => {
    res.render('register');
});

// To do: post method to register user

registerController.post('/', async (req, res) => {
    console.log(req.body);
    const { username, password, repass } = req.body;
    //Add validattion if the username alreday exists
    const user = await findByUsername(username.toLowerCase()); // db could throw eror too :/
    if (user[0]) {
        const errUsr = 'Username already  taken!'
        res.render('register', { errUsr });
        return;
    }

    // I guess those operations could be in a middleware bu idk..
    // check if password and repeat password match 
    // if not display error on the client 
    if (password != repass) {
        const errPass = 'Passwords must be equal!';
        res.render('register', { errPass });
        return;
    }


    //await createUser(username.toLowerCase(), password);
    // if those are met, save the new user to the database 
    // set him a token I guess ?!?!?
    //and redirect him to the login page 

    res.redirect('/login');
});

module.exports = registerController;
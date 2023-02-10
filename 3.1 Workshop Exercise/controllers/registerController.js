const { createUser } = require('../services/userService');

const registerController = require('express').Router();

registerController.get('/', (req, res) => {
    res.render('register');
});

registerController.post('/', async (req, res) => {
    const { username, password, rePass } = req.body;
    try {
        for (let element of [username, password, rePass]) {
            if (element == '') {
                throw new Error('All fields must be filled!');
            } // moje i da go napraq da mqta masiv s obekt..ddz zaradi validatora posle
        }

        await createUser(username, password);
        res.redirect('/login');
    } catch (err) {
        // to do: add data validation and display proper views 
        console.log(err.message);
        res.redirect('/');
    }
});


module.exports = registerController;
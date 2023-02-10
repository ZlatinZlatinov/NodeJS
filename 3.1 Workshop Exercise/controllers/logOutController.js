const logOutController = require('express').Router();

logOutController.get('/', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = logOutController;
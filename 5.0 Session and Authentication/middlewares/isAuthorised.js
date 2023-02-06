const authorised = require('express').Router();

authorised.get('*', (req, res, next) => {
    const isAuth = req.isAuthorised;
    // the user can not acces those parts
    if (!isAuth) {
        res.redirect('/login');
        return;
    }

    next();
});

module.exports = authorised;
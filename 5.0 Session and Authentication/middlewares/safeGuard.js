const safeGuard = require('express').Router();

safeGuard.get('/', (req, res, next) => {
    const token = req.cookies['auth'];
    if (token) {
        // To do verify the token, but for now we asume it is all clear 
        req.isAuthorised = true;
        next();
    } else {
        req.isAuthorised = false;
        res.redirect('login');
    }
});

module.exports = safeGuard;
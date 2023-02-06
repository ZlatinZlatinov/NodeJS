const { verifyToken } = require('../services/tokenService');

const safeGuard = require('express').Router();

safeGuard.get('*', (req, res, next) => {
    const token = req.cookies['auth'];
    if (token) {
        // To do verify the token, but for now we asume it is all clear
        try {
            const decodedToken = verifyToken(token);
            req.isAuthorised = true;
            res.locals.username = decodedToken.username;
            res.locals.isAuthorised = true;
        } catch (err) {
            //req.isAuthorised = false;
            res.clearCookie('auth');
            res.redirect('/login');
        }
    }
    next();
});

module.exports = safeGuard;
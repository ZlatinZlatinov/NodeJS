const { verifyToken } = require('../services/tokenService');

module.exports = function (req, res, next) {
    const token = req.cookies['auth'];
    if (token) {
        try {
            const decodedToken = verifyToken(token);
            req.isAuth = true;
            req.username = decodedToken.username;
            req.userId = decodedToken.id;
            res.locals.username = decodedToken.username;
            res.locals.isAuth = true;
        } catch (err) {
            res.clearCookie('auth');
            res.redirect('/login');
        }
    }
    next();
};
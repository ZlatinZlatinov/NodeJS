const { verifyToken } = require('../sevices/tokenService');

module.exports = function (req, res, next) {
    const token = req.cookies['auth'];
    if (token) {
        try {
            const decodedToken = verifyToken(token);
            req.isUser = true;
            req.username = decodedToken.username;
            req.userId = decodedToken.id;
            // to do add res.locals if needed 
            res.locals.isUser = true;
        } catch (err) {
            res.clearCookie('auth');
            res.redirect('/login');
        }
    }

    next();
}
const { verifyToken } = require('../sevices/tokenService');
const { findByUserId } = require('../sevices/userService');

module.exports = async function (req, res, next) {
    const token = req.cookies['auth'];
    if (token) {
        try {
            const decodedToken = verifyToken(token);
            req.isUser = true;
            req.User = await findByUserId(decodedToken.id);
            //req.username = decodedToken.username;
            req.userId = decodedToken.id;
            // to do add res.locals if needed 
            res.locals.isUser = true;
            res.locals.userId = decodedToken.id;
        } catch (err) {
            res.clearCookie('auth');
            res.redirect('/login');
        }
    }

    next();
}
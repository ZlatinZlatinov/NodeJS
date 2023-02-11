
module.exports = function (req, res, next) {
    const isAuth = req.isAuth;
    if (!isAuth) {
        res.redirect('/login');
        return;
    }

    next();
};
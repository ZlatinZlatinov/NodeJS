module.exports = function (req, res, next) {
    const isUser = req.isUser;
    if (!isUser) {
        res.redirect('/login');
        return;
    }

    next();
}
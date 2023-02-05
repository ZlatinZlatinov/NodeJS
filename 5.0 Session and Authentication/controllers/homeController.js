const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    const isAuthorised = req.isAuthorised;
    console.log(isAuthorised);
    res.render('home', { isAuthorised });
});

module.exports = homeController;
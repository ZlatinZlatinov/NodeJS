const createController = require('express').Router();

createController.get('/', (req, res) => {
    const isAuthorised = req.isAuthorised;
    console.log(isAuthorised);
    res.render('create');
});

module.exports = createController;
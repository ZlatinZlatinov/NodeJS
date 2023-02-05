const createController = require('express').Router();

createController.get('/', (req, res) => {
    const isAuthorised = req.isAuthorised;
    res.render('create', { isAuthorised });
});

module.exports = createController;
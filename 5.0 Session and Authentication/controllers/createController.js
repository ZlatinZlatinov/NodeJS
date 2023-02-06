const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/catalog');
});

module.exports = createController;
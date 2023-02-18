const detailsController = require('express').Router();
const { getItemById } = require('../sevices/itemService');
const { } = require('../sevices/userService');

detailsController.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    res.render('details');
});
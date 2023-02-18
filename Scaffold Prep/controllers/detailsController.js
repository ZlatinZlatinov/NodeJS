const detailsController = require('express').Router();
const { getItemById } = require('../services/itemService');
const { } = require('../services/userService');

detailsController.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId; 
    const item = req.Item;
    res.render('details', {
        item
    });
}); 

module.exports = detailsController;
const editController = require('express').Router();
const { getItemById, updateItem } = require('../services/itemService');

editController.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const item = req.Item;
    res.render('edit', {
        item
    });
});

editController.post('/:itemId', (req, res) => {
    const itemId = req.params.itemId; 
    const item = req.Item;
    //TODO add data validation and edit the item
});

module.exports = editController;
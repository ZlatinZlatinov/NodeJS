const editController = require('express').Router();
const { getItemById, updateItem } = require('../sevices/itemService');

editController.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    res.render('edit');
});

editController.post('/:itemId', (req, res) => {
    const itemId = req.params.itemId; 
    //TODO add data validation and edit the item
});

module.exports = editController;
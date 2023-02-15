const createController = require('express').Router(); 
const { getItemById, getItemByName} = require('../sevices/itemService');

createController.get('/', (req, res) => {
    res.render('create');
});  

createController.post('/', (req, res) => {
    //TODO add data validation and create item
});

module.exports = createController;
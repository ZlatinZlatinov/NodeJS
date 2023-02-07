const { getAllItems } = require('../services/itemService');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
    const itemsList = await getAllItems(); // so if there are no items in the list it will return just an empty array
    //console.log('yes??', itemsList);
    res.render('catalog', {itemsList});
}); 

module.exports = catalogController;
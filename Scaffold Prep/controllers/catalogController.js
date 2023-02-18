const catalogController = require('express').Router();
const { loadAllItems } = require('../services/itemService');

catalogController.get('/', async (req, res) => {
    const items = await loadAllItems();
    res.render('catalog', items);
});

module.exports = catalogController;
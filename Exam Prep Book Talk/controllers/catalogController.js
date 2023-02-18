const catalogController = require('express').Router();
const { loadAllItems } = require('../sevices/itemService');

catalogController.get('/', async (req, res) => {
    const books = await loadAllItems();
    res.render('catalog', { books });
    // just green stuff xdd
});

module.exports = catalogController;
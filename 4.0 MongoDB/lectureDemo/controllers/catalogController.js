const catalogController = require('express').Router();
const { getListOfArticles } = require('../services/articleService');

catalogController.get('/', async (req, res) => {
    const articles = await getListOfArticles();
    res.render('catalog', {
        articles
    });
});

module.exports = catalogController;
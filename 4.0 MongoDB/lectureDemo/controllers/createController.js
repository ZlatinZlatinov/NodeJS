const Article = require('../models/Article');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/', async (req, res) => {
    const { authorName, title, description } = req.body;
    await Article({
        authorName,
        title,
        description
    }).save();
    res.redirect('/catalog');
}); 
// Probably should implement some verification logic for the request body

module.exports = createController;
const notFound = require('express').Router();

notFound.get('/', (req, res) => {
    res.render('404');
});

module.exports = notFound;
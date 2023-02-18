const catalogController = require('express').Router(); 

catalogController.get('/', (req, res) => {
    res.render('catalog'); 
    // just green stuff xdd
}); 

module.exports = catalogController;
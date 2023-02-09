const erorController = require('express').Router(); 

erorController.get('/', (req, res) =>{
    res.render('eror');
}); 

module.exports = erorController;
const catalogControler = require('express').Router(); 

catalogControler.get('/catalog', (req, res) =>{
    res.json([]);
}); 


module.exports = catalogControler;

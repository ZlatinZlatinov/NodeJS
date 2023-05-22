const catalogControler = require('express').Router();

catalogControler.get('/catalog', (req, res) => {
    res.json([]);
});

catalogControler.post('/catalog', (req, res) => {
    console.log(req.body);
    res.end();
});


module.exports = catalogControler;

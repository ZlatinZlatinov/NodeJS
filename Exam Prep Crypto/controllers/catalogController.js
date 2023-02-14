const { loadAllCrypto } = require('../sevices/cryptoService');

const catalogController = require('express').Router();

catalogController.get('/', async(req, res) => {
    const allCrypto = await loadAllCrypto();
    res.render('catalog', {
        allCrypto
    }); 

});

module.exports = catalogController;
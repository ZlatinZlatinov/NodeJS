const { deleteCrypto } = require('../sevices/cryptoService');

const deleteController = require('express').Router();

deleteController.get('/:cryptoId', async (req, res) => {
    const cryptoId = req.params.cryptoId;
    try {
        await deleteCrypto(cryptoId);
        res.redirect('/catalog');
    } catch (err) { 
        console.log(err);
        res.render('404');
    }
}); 

module.exports = deleteController;
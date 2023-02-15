const buyController = require('express').Router();
const { findCryptoById } = require('../sevices/cryptoService');
const { findByUserId } = require('../sevices/userService');

buyController.get('/:cryptoId', async (req, res) => {
    const cryptoId = req.params.cryptoId;
    try {
        const crypto = await findCryptoById(cryptoId); // so if this throws an error, there is no such crypto and user will be redirected
        
        const userId = req.userId; 
        //crypto.buyCrypto.push(userId); 
        //await crypto.save(); // weell some bugs were found here  xdd
        
        const user = await findByUserId(userId);
        user.cryptoList.push(cryptoId);
        await user.save();

        res.redirect(`/details/${cryptoId}`);
    } catch (err) {
        console.log(err);
        res.redirect('*');
    }
});

module.exports = buyController;
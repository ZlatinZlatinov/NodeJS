const { findCryptoById } = require('../sevices/cryptoService');
const { findByUserId } = require('../sevices/userService');

const detailsController = require('express').Router();

detailsController.get('/:cryptoId', async (req, res) => {
    const cryptoId = req.params.cryptoId;
    try {
        const crypto = await findCryptoById(cryptoId);

        const isUser = req.isUser;
        const userId = req.userId;
        const user = await findByUserId(userId);
        let isOwner = false;
        let isBought = false;
        
        if (crypto.owner == userId) {
            isOwner = true;
        } 

        if(user.cryptoList.includes(cryptoId) == false && isOwner == false){
            isBought = true;
        }

        res.render('details', {
            crypto,
            isUser,
            isOwner, 
            isBought
        });

    } catch (err) {

        res.render('404');
    }
});

module.exports = detailsController;
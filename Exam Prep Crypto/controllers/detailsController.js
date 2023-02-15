const { findCryptoById, } = require('../sevices/cryptoService');
const { findByUserId } = require('../sevices/userService');

const detailsController = require('express').Router();

detailsController.get('/:cryptoId', async (req, res) => {
    const cryptoId = req.params.cryptoId;
    try {
        const crypto = await findCryptoById(cryptoId);

        const isUser = req.isUser;
        let userId, user;

        let isOwner = false;
        let isBought = false;
        
        if (isUser) {
            userId = req.userId;
            user = await findByUserId(userId);

            if (crypto.owner == userId) {
                isOwner = true;
            }

            if (user.cryptoList.includes(cryptoId) == false && isOwner == false) {
                isBought = true;
            }
        }

        res.render('details', {
            crypto,
            isUser,
            isOwner,
            isBought
        });
    } catch (err) {
        console.log(err);
        res.render('404');
    }
});

module.exports = detailsController;
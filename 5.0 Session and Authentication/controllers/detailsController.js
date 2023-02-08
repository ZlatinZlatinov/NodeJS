const detailsController = require('express').Router();
const { verifyToken } = require('../services/tokenService');
const { findItemById } = require('../services/itemService');
const { findByUsername } = require('../services/userService');

detailsController.get('/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await findItemById(itemId);
        const token = req.cookies['auth'];
        if (token) {
            const decodedToken = await verifyToken(token);
            const username = decodedToken.username;
            const user = await findByUsername(username);
            let isOwner = false;
            if (user[0].itemsList.includes(itemId)) {
                isOwner = true;
            }
            res.render('details', { item, isOwner });
        } else {
            res.render('details', { item });
        }
    } catch (err) {
        const eroro = err.message;
        res.render('details', { eroro });
    }
});

module.exports = detailsController;
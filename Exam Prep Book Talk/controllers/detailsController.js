const detailsController = require('express').Router();
const { getItemById, checkList } = require('../sevices/itemService');
const { } = require('../sevices/userService');

detailsController.get('/:itemId', async (req, res) => {
    const book = req.Item;
    const itemId = book._id;//req.params.itemId;

    let isOwner, isUser, isWished = false;

    if (req.isUser) {
        isUser = true;
        const chek = await checkList(itemId, req.userId);

        if (chek) {
            isWished = true;
        }

        if (book.owner == req.userId) {
            isOwner = true;
        }
    }

    res.render('details', {
        book,
        isUser,
        isOwner,
        isWished
    });
});

module.exports = detailsController;
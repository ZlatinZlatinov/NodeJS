const wishController = require('express').Router();
const { getItemById, updateItem2 } = require('../sevices/itemService');
const { findByUserId } = require('../sevices/userService');

wishController.get('/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        await updateItem2(itemId, req.userId);
        const user = await findByUserId(req.userId);
        user.myList.push(itemId);
        await user.save();
        res.redirect(`/details/${itemId}`);
    } catch (err) {
        console.log(err);
        res.render('404');
    }
});

module.exports = wishController;
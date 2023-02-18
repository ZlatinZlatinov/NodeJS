const detailsController = require('express').Router();
const { getItemById } = require('../sevices/itemService');
const { } = require('../sevices/userService');

detailsController.get('/:itemId', async(req, res) => {
    const itemId = req.params.itemId;
    try {
        const book = await getItemById(itemId);

        let isOwner, isUser, isWished = false;

        if (req.isUser) {
            isUser = true; 
            if(book.wishingList.includes(req.userId)){
                isWished = true;
            }

            if (book.owner == req.userId) {
                isOwner = true;
            }
        } 

        res.render('details', {
            book, 
            isUser, 
            isOwner
        });
    } catch (err) {
        console.log(err);
        res.render('404');
    }
    res.render('details');
}); 

module.exports = detailsController;
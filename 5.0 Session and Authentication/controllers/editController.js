const editController = require('express').Router();
const { updateItem, findItemById } = require('../services/itemService');

editController.get('/:itemId', async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const item = await findItemById(itemId);
        res.render('edit', { item }); 
    } catch (err) {
        res.render('edit');
    }
});

editController.post('/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    const { itemName, imgUrl, description, category } = req.body;

    for (let element of [itemName, imgUrl, description, category]) {
        if (element == '') {
            console.log('erroro here?');
            res.render('edit');
            return; // some kind of cheking valuse;
        }
    }

    try {
        await updateItem(itemId, itemName, imgUrl, description, category);
        res.redirect('/catalog');
    } catch (err) {
        console.log(err.message);
        res.render('edit');
    }
});

module.exports = editController;
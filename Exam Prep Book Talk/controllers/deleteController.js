const { deleteItem } = require('../sevices/itemService');

const deleteController = require('express').Router();

deleteController.get('/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        await deleteItem(itemId); 
        const user = req.User; 
        const index =  user.myList.indecOf(itemId); 
        
        user.myList.splice(index, 1); 
        await user.save();
        
        res.redirect('/catalog');
    } catch (err) { 
        res.render('404');
    }
}); 

module.exports = deleteController;
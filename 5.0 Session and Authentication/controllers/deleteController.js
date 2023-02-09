const { deleteItem } = require('../services/itemService');
const { updateUserList } = require('../services/userService');

const deleteController = require('express').Router();

deleteController.get('/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.userId; 
    try{
    await updateUserList(userId, itemId);
    await deleteItem(itemId);
    }catch(err){
        console.log(err.message);
    }  

    res.redirect('/catalog');
});

module.exports = deleteController;
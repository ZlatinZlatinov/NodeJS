const findItem = require('express').Router();
const { getItemById } = require('../sevices/itemService');

findItem.get('/:itemId', async (req, res, next) => {
    const itemId = req.params.itemId;
    try { 
        const item = await getItemById(itemId);
        req.Item = item;
        next();
    } catch (err) { 
        
        res.render('404');
    }
});

module.exports = findItem;
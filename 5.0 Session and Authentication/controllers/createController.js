const { findByUsername } = require('../services/userService');
const { verifyToken } = require('../services/tokenService');
const { createNewItem, findItemByName } = require('../services/itemService');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/', async (req, res) => {
    const token = req.cookies['auth'];
    const decodedToken = verifyToken(token);
    const username = decodedToken.username;
    const user = await findByUsername(username);

    let { itemName, imgUrl, description, category } = req.body;
    itemName = itemName.toLowerCase();
    await createNewItem({ itemName, imgUrl, description, category, _ownerId: user[0]._id });
    // Ye I know, it looks like crap, but it works somehow xdd
    // I should some kind of checking if every input field isnt empty
    const itemId = await findItemByName(itemName);
    user[0].itemsList.push(itemId._id);
    await user[0].save();
    res.redirect('/catalog');
});

module.exports = createController;
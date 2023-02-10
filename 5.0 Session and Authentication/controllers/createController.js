const { findByUsername } = require('../services/userService');
//const { verifyToken } = require('../services/tokenService');
const { createNewItem, findItemByName } = require('../services/itemService');
const { body, validationResult } = require('express-validator');

const createController = require('express').Router();

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/',
    body('imgUrl')
        .trim()
        .isURL().withMessage('Img url must start with http:// or https://'),
    async (req, res) => {
        let { itemName, imgUrl, description, category } = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            const user = await findByUsername(req.username);
            itemName = itemName.toLowerCase();

            await createNewItem({ itemName, imgUrl, description, category, _ownerId: user[0]._id });
            const itemId = await findItemByName(itemName);

            user[0].itemsList.push(itemId._id);
            await user[0].save();

            res.redirect('/catalog');
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg }
            });

            res.render('create', {
                errors,
                itemName,
                imgUrl,
                description,
            });
        }

        // Ye I know, it looks like crap, but it works somehow xdd
        // I should some kind of checking if every input field isnt empty
    });

module.exports = createController;
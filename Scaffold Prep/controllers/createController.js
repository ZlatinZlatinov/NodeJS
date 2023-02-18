const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getItemById, getItemByName, createItem } = require('../sevices/itemService');

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/',
    body('itemName') // change that if needed!!
        .trim()
        .notEmpty().withMessage('All fileds are required!')
        .isLength({ min: 2 }).withMessage('Item name be altelast 2 character long!').bail()
        .custom(name => {
            return getItemByName(name).then(item => {
                if (item[0]) {
                    return Promise.reject(`This name is already taken!`);
                }
            });
        }),
    body('image')
        .trim()
        .notEmpty().withMessage('All fields are required!')
        .isURL().withMessage('Image Url must be a valid URL address!'),
    body('description')
        .trim()
        .escape()
        .notEmpty().withMessage('All fileds are required!')
        .isLength({ min: 10 }).withMessage('Description must be atleast 10 characters long!'),

    async (req, res) => {
        //TODO add data validation and create item 
        const { } = req.body;
        try {
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            // await createItem({}); // add payload
            res.redirect('/catalog');
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });

            res.render('/create', {
                errors,
            })
        }
    });

module.exports = createController;
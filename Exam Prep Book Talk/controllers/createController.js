const createController = require('express').Router();
const { getItemById, getItemByName, createItem } = require('../sevices/itemService');
const { body, validationResult } = require('express-validator');

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/',
    body('author')
        .trim()
        .isLength({ min: 5 }).withMessage('Book author must be altelast 5 character long!'),
    body('genre')
        .trim()
        .isLength({ min: 3 }).withMessage('Book genre must be altelast 3 character long!'),
    body('title')
        .trim()
        .isLength({ min: 2 }).withMessage('Book name must be altelast 2 character long!').bail()
        .custom(name => {
            return getItemByName(name).then(item => {
                if (item[0]) {
                    return Promise.reject(`This name is already taken!`);
                }
            });
        }),
    body('stars')
        .trim()
        .isNumeric({ no_symbols: true }).withMessage('Stars must be a number').bail()
        .custom((stars) => {
            if (Number(stars) < 1 || Number(stars) > 5) {
                throw new Error('Stars must be betwaeen 1 and 5!');
            }

            return true;
        }),
    body('image')
        .trim()
        .isURL().withMessage('Image Url must be a valid URL address!'),
    body('description')
        .trim()
        .escape()
        .isLength({ min: 10 }).withMessage('Review must be atleast 10 characters long!'),

    async (req, res) => {
        let { title, author, genre, stars, image, description } = req.body;
        try {
            for (let element of [title, author, genre, stars, image, description]) {
                if (element == '') {
                    throw [{ msg: 'All fields are required!' }];
                }
            }

            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            stars = Number(stars);

            await createItem({ title, author, genre, stars, image, description, owner: req.userId });

            res.redirect('/catalog');
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });

            res.render('create', {
                errors,
                title,
                author,
                genre,
                stars,
                image,
                description
            });
        }
    });

module.exports = createController;
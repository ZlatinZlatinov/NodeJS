const editController = require('express').Router();
const { getItemById, updateItem, getItemByName } = require('../sevices/itemService');
const { body, validationResult } = require('express-validator');

editController.get('/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const book = await getItemById(itemId);
        res.render('edit', {
            id: book._id,
            title: book.title,
            author: book.author,
            genre: book.genre,
            stars: book.stars,
            image: book.image,
            description: book.description
        });

    } catch (err) {
        res.render('404');
    }
});

editController.post('/:itemId',
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
        const itemId = req.params.itemId;
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

            await updateItem(itemId, title, author, genre, stars, image, description);

            res.redirect(`/details/${itemId}`);
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });

            res.render('edit', {
                errors,
                id: itemId,
                title,
                author,
                genre,
                stars,
                image,
                description
            });
        }
    });

module.exports = editController;
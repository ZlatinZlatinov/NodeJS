const { findCryptoById, findCryptoByName, updateCrypto } = require('../sevices/cryptoService');
const { body, validationResult } = require('express-validator');
const { mapOpitions } = require('../utils/mapOpionst');
const editController = require('express').Router();

editController.get('/:cryptoId', async (req, res) => {
    const cryptoId = req.params.cryptoId;
    try {
        const crypto = await findCryptoById(cryptoId);
        const options = mapOpitions(crypto.paymentMethod)
        res.render('edit', {
            id: crypto._id,
            name: crypto.name,
            image: crypto.image,
            price: crypto.price,
            description: crypto.description,
            options
        });
    } catch (err) {
        res.render('404');
    }
});

editController.post('/:cryptoId',
    body('name')
        .trim()
        .isLength({ min: 2 }).withMessage('Crypto name must be altelast 2 character long!').bail(),
    body('price')
        .trim()
        .isNumeric({ no_symbols: false }).withMessage('Price msut be a number it may contain decimal point').bail()
        .custom((price) => {
            if (Number(price) < 0.0001) {
                throw new Error('Price must be a positive number!');
            }

            return true;
        }),
    body('image')
        .trim()
        .isURL().withMessage('Image Url must be a valid URL address!'),
    body('description')
        .trim()
        .escape()
        .isLength({ min: 10 }).withMessage('Description must be atleast 10 characters long!'),
    body('paymentMethod')
        .trim()
        .custom((method) => {
            const options = ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'];
            if (options.includes(method) == false) {
                throw new Error('Allowed methods are: crypto-wallet, credit-card, debit-card, and paypal!');
            }

            return true;
        }),

    async (req, res) => {
        const cryptoId = req.params.cryptoId;
        let { name, image, price, description, paymentMethod } = req.body;
        try {
            for (let element of [name, image, price, description, paymentMethod]) {
                if (element == '') {
                    throw [{ msg: 'All fields are required!' }];
                }
            }

            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            price = Number(price);

            await updateCrypto(cryptoId, name, image, price, description, paymentMethod);

            res.redirect(`/details/${cryptoId}`);
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });
            console.log(err);
            const options = mapOpitions(paymentMethod);
            res.render('edit', {
                errors,
                name,
                image,
                price,
                description,
                options
            });
        }
    });

module.exports = editController;
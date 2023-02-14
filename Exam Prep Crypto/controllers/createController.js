const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { createCrypto, findCryptoByName } = require('../sevices/cryptoService');
const { findByUserId } = require('../sevices/userService');
const { mapOpitions } = require('../utils/mapOpionst');

createController.get('/', (req, res) => {
    res.render('create');
});

createController.post('/',
    body('name')
        .trim()
        .isLength({ min: 2 }).withMessage('Crypto name must be altelast 2 character long!').bail()
        .custom(name => {
            return findCryptoByName(name).then(crypto => {
                if (crypto[0]) {
                    return Promise.reject(`This name is already taken!`);
                }
            });
        }),
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

            //const userId = req.userId;
            //const user = await findByUserId(userId);
            await createCrypto({ name, image, price, description, paymentMethod, owner: req.userId });

            // const [newCrypto] = await findCryptoByName(name);
            // user.cryptoList.push(newCrypto._id);
            // await user.save();

            res.redirect('/catalog');
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });

            const options = mapOpitions(paymentMethod);
            res.render('create', {
                errors,
                name,
                image,
                price,
                description,
                options
            })
        }
    });
module.exports = createController;
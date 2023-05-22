const { hasUser } = require('../middlewares/guards');
const { loadAllItems, createItem, getItemById } = require('../services/carService');
const { erorParser } = require('../utils/erorParser');
const { body, validationResult } = require('express-validator');

const catalogControler = require('express').Router();

catalogControler.get('/catalog', async (req, res) => {
    const items = await loadAllItems();
    res.json(items);
});

catalogControler.post('/catalog',
    hasUser(),
    body('img').isURL().withMessage('Img must be a valid URL address!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            const data = Object.assign({ _ownerId: req.user._id }, req.body);
            const createdItem = await createItem(data);
            res.status(201).json(createdItem);
        } catch (err) {
            const message = erorParser(err);
            res.status(400).json({ message });
        }
    });

catalogControler.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const item = await getItemById(id);
    res.json(item);
});


module.exports = catalogControler;

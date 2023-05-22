const { hasUser } = require('../middlewares/guards');
const { loadAllItems, createItem, getItemById, deleteItem, updateItem, getUserItems } = require('../services/carService');
const { erorParser } = require('../utils/erorParser');
const { body, validationResult } = require('express-validator');

const catalogControler = require('express').Router();

catalogControler.get('/catalog', async (req, res) => {
    let items = [];

    if (req.query.where) {
        const userId = JSON.parse(req.query.where.split('=')[1]);
        items = await getUserItems(userId);
    } else {
        items = await loadAllItems();
    }

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

catalogControler.delete('/catalog/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    await deleteItem(id);
    res.sendStatus(204).json({ message: 'Item deleted succesfully!' });
});

catalogControler.put('/catalog/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const item = req.body;
    await updateItem(id, item);
    // add error handling!
    res.status(200).end();
});


module.exports = catalogControler;

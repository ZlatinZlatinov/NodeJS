const router = require('express').Router();
const { addNewPart } = require('../services/productService');

router.get('/', (req, res) => {
    res.render('create');
});

router.post('/', (req, res) => {
    const newPart = req.body;
    addNewPart(newPart);
    res.redirect('/catalog');
})

module.exports = router;
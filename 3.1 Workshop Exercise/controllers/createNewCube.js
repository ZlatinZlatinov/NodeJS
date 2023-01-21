const router = require('express').Router();
const { addNewCube } = require('../config/dataManagment');
router.get('/', (req, res) => {
    res.render('create');
});

router.post('/', (req, res) => {
    const newCube = req.body;
    addNewCube(newCube);
    res.redirect('/');
});

module.exports = router;
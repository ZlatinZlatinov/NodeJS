const { createNewCube } = require('../services/createCube');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create');
});

router.post('/', async (req, res) => {
    let {name, description, imgUrl, difficultyLevel} = req.body;
    await createNewCube({name, description, imgUrl, difficultyLevel});
    res.redirect('/');
});

module.exports = router;
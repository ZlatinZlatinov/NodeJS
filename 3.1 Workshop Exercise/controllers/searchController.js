//const { searchCube } = require('../config/dataManagment'); No longer supported!
const { searchForCube } = require('../services/searchCube');

const router = require('express').Router();

router.post('/', async (req, res) => {
    const { search, from, to } = req.body;
    const cubes = await searchForCube(search);

    if (cubes.length > 0) {
        res.render('home', {
            cubes
        });
    } else {
        res.redirect('/');
    }
});

module.exports = router;
const { createNewCube } = require('../services/createCube');
const { findByUserId } = require('../services/userService');
const { findCubeByName } = require('../services/searchCube');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create');
});

router.post('/', async (req, res) => {
    // to do: add data validation
    let { name, description, imgUrl, difficultyLevel } = req.body;
    await createNewCube({ name, description, imgUrl, difficultyLevel });
    const user = await findByUserId(req.userId);
    const [cube] = await findCubeByName(name);
    user.itemsList.push(cube._id);
    await user.save();
    res.redirect('/');
});

module.exports = router;
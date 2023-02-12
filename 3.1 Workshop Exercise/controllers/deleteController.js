const deleteController = require('express').Router();
const { findCubeById } = require('../services/searchCube');
const { deleteCube } = require('../services/showCubeDetails');
const { mapOpions } = require('../utils/optionsUtil');
const { findByUserId } = require('../services/userService');

deleteController.get('/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    try {
        const cube = await findCubeById(cubeId);
        const diffLvl = cube.difficultyLevel;
        const optionsArr = mapOpions(diffLvl);
        res.render('delete', {
            cube,
            optionsArr
        });

    } catch (err) {
        console.log(err.message);
    }
});

deleteController.post('/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    // Dont do a realtion with accessories, because now you shold remove 
    // cubes from the accessories xdd 
    // And also remove it from the owners list...
    const user = await findByUserId(req.userId);
    
    const index = user.itemsList.indexOf(cubeId);
    user.itemsList.splice(index, 1);
    await user.save();
    await deleteCube(cubeId);
    res.redirect('/');
});

module.exports = deleteController;
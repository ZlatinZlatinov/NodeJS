const editController = require('express').Router();
const { findCubeById } = require('../services/searchCube');
const { updateCubeInfo } = require('../services/showCubeDetails');
const { mapOpions } = require('../utils/optionsUtil');

editController.get('/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    try {
        const cube = await findCubeById(cubeId);
        const optionsArr = mapOpions(cube.difficultyLevel);
        res.render('edit', {
            cube,
            optionsArr
        });

    } catch (err) {
        console.log(err.message);
        res.render('edit');
    }
});

editController.post('/:cubeId', async (req, res) => {
    // to do: add data validation! 
    const cubeId = req.params.cubeId;
    const { name, description, imgUrl, difficultyLevel } = req.body;
    try {
        await updateCubeInfo(cubeId, name, description, imgUrl, difficultyLevel);
        res.redirect(`/details/${cubeId}`);
    } catch (err) {
        res.redirect('/');
        console.log(err.message);
    }
});


module.exports = editController;
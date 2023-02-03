const router = require('express').Router();
const { getAllAccessories, getAccessoryByID } = require('../services/accessoryService');
const { searchCubeById } = require('../services/searchCube');
//const {getCubeDetails} = require('../config/dataManagment'); no longer supported
const { showCubeDetails } = require('../services/showCubeDetails');

router.get('/:cubeId', async (request, response) => { // cube details
    const cubeId = request.params.cubeId;
    const cube = await showCubeDetails(cubeId);
    const accesories = await getAllAccessories();

    response.render('details', {
        title: 'Details',
        cube,
        accesories
    });
}); // maybe in a while I should add some middlewares  

router.post('/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const accesoryId = req.body.accessoryId;
    await getAccessoryByID(accesoryId, cubeId);
    const result = await searchCubeById(cubeId, accesoryId);
    if (result) {
        res.render('accessoryEror');
        return;
    }

    res.redirect(`/details/${cubeId}`);
});

module.exports = router;
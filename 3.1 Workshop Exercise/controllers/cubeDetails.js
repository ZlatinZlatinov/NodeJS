const router = require('express').Router();
const { getAllAccessories, getAccessoryByID } = require('../services/accessoryService');
const { searchCubeById } = require('../services/searchCube');
const { showCubeDetails } = require('../services/showCubeDetails');
//const {getCubeDetails} = require('../config/dataManagment'); no longer supported

router.get('/:cubeId', async (request, response) => { // cube details
    const cubeId = request.params.cubeId;
    const [cube, cubeAccessories] = await showCubeDetails(cubeId);
    const accesories = await getAllAccessories();
    
    response.render('details', {
        title: 'Details',
        cube,
        cubeAccessories,
        accesories
    });
}); // maybe in a while I should add some middlewares  

router.post('/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const accesoryId = req.body.accessoryId;
    const result = await searchCubeById(cubeId, accesoryId); // returns true or false
    
    if (result) { // if true, means that the cube already has attached that accessory
        res.render('accessoryEror');
        return;
    }
    await getAccessoryByID(accesoryId, cubeId); // it simply pushes the cubeID to the collection

    res.redirect(`/details/${cubeId}`);
});

module.exports = router;
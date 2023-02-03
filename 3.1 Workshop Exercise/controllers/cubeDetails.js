const router = require('express').Router(); 
//const {getCubeDetails} = require('../config/dataManagment'); no longer supported
const { showCubeDetails } = require('../services/showCubeDetails');

router.get('/:cubeId', async (request, response) => { // cube details
    const cubeId = request.params.cubeId;
    const cube = await showCubeDetails(cubeId);
    response.render('details', cube);
}); // maybe in a while I should add some middlewares 

module.exports = router;
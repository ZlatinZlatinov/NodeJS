const router = require('express').Router(); 
//const {getCubeDetails} = require('../config/dataManagment'); no longer supported
const { showCubeDetails } = require('../services/showCubeDetails');

router.get('/:cubeName', async (request, response) => { // cube details
    const cubeName = request.params.cubeName;
    const cube = await showCubeDetails(cubeName);
    response.render('details', cube);
}); // maybe in a while I should add some middlewares 

module.exports = router;
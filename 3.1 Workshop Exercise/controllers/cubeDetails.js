const router = require('express').Router(); 
const {getCubeDetails} = require('../config/dataManagment'); 

router.get('/:cubeId', (request, response) => { // cube details
    const id = request.params.cubeId;
    const cube = getCubeDetails(id);
    response.render('details', cube);
}); 

module.exports = router;
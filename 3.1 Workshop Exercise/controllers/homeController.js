const router = require('express').Router(); 
//const {getCubes} = require('../config/dataManagment'); no longer is supported
const {getallCubes} = require('../services/loadAllCubse');

router.get('/', async (request, response) => { // / - homepage
    const cubes = await getallCubes();
    response.render('home', {
        cubes
    });
});

module.exports =  router ;
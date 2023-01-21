const router = require('express').Router(); 
const {getCubes} = require('../config/dataManagment');

router.get('/', (request, response) => { // / - homepage
    const cubes = getCubes();
    response.render('home', {
        cubes
    });
});

module.exports =  router ;
const { searchCube } = require('../config/dataManagment');

const router = require('express').Router(); 

router.post('/', (req, res)=>{
    const cubes = searchCube(req.body); 

    res.render('home', {
        cubes
    });
}); 

module.exports = router;
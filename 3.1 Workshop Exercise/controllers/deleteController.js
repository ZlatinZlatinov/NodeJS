const deleteController = require('express').Router(); 

deleteController.get('/:cubeId' , (req, res)=>{
    res.render('delete');
}); 

module.exports = deleteController;
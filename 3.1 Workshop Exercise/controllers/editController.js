const editController = require('express').Router(); 

editController.get('/:cubeId' , (req, res)=>{
    res.render('edit');
}); 


module.exports = editController;
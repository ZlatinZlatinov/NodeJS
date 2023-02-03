const { createNewAccessory } = require('../services/accessoryService');

const createAccessory = require('express').Router(); 

createAccessory.get('/', (req, res) => {
    res.render('createAccessory');
}); 

createAccessory.post('/', async (req, res) =>{
    const {name, description, imgUrl} = req.body;
    await createNewAccessory({name, description, imgUrl});
    res.redirect('/');
});

module.exports = createAccessory;
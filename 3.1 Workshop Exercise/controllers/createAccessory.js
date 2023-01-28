const createAccessory = require('express').Router(); 

createAccessory.get('/', (req, res) => {
    res.render('createAccessory');
}); 

module.exports = createAccessory;
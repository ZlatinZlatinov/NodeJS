const homeController = require('express').Router();


homeController.get('/', (req, res) => {
    console.log('>>Cooookieeee waraaap ' + req.cookies['auth']);
    res.render('home');
}); 

module.exports = homeController;
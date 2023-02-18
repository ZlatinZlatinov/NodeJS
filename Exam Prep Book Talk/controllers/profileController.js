const profileController = require('express').Router();
const { findByUserId, getUserList } = require('../sevices/userService');
const { } = require('../sevices/itemService');

profileController.get('/', async(req, res) => {
    try{
        const user = await getUserList(req.userId); 
        const email = user.email; 
        const myList = user.myList;
        
        res.render('profile', {
            email, 
            myList
        }); 
    }catch(err){
        console.log(err);
        res.render('404');
    }
}); 

module.exports = profileController;
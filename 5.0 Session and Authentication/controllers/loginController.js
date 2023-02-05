const loginController = require('express').Router(); 

loginController.get('/', (req, res) =>{
    res.render('login');
}); 

loginController.post('/', (req, res) => {
    console.log(req.body); 
    // To do: authenticate user comparare passowrds from database using bcrypt and hash it 
    // if conditions are not met, display error on the client 
    // if met log user and send him to homepage with proper views
    res.redirect('/');
});

module.exports = loginController;
const { register, login } = require('../services/userService');

const authController = require('express').Router();

authController.post('/login', async (req, res) => {
    const email = req.body.email; 
    const password = req.body.password;
    
    try{
        const token = await login(email, password);
        res.json(token);
    } catch(err){
        res.status(401).json({
            message: err.message
        });
    }
});

authController.post('/register', async (req, res) => {
    const email = req.body.email; 
    const password = req.body.password;
    
    try{
        const token = await register(email, password);
        res.json(token);
    } catch(err){
        res.status(403).json({
            message: err.message
        });
    }
});

module.exports = authController;
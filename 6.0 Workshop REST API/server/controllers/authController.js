const { register, login, logout } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { erorParser } = require('../utils/erorParser');

const authController = require('express').Router();

authController.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const token = await login(email, password);
        res.json(token);
    } catch (err) {
        const message = erorParser(err);
        res.status(401).json({ message });
    }
});

authController.post('/register',
    body('email').trim().isEmail()
        .withMessage('Ivalid email address!'),
    body('password').trim().isLength({ min: 6 })
        .withMessage('Password should be at least 6 characters long!'),
    async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            const token = await register(email, password);
            res.json(token);
        } catch (err) {
            const message = erorParser(err);
            res.status(400).json({ message });
        }
    });

authController.get('/logout', async (req, res) => {
    const token = req.token;
    await logout(token);
    res.status(204).end();
});

module.exports = authController;
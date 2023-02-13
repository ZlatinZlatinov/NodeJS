const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');


module.exports = (app) => {
    const handlebars = hbs.create({
        extname: '.hbs'
    });

    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');
    app.use('/static', express.static('static'));
    app.use(cookieParser());
    app.use(auth);
}
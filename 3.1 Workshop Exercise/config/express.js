const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {
    
    //TODO: Setup the view engine
    const handlebars = hbs.create({
        extname: '.hbs'
    }); 

    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');
    //TODO: Setup the body parser
    app.use(express.urlencoded({ extended: true }));
    //TODO: Setup the static files
    app.use('/static', express.static('static'));
};
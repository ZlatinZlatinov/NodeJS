const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

const handlebars = hbs.create({
    extname: '.hbs'
});

module.exports = (app) => {
    
    //TODO: Setup the view engine
    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs'); 
    // app.set('views', '/src/views') ako iskame da promenim direktoriqta na view papkata
    //TODO: Setup the body parser
    app.use(express.urlencoded({ extended: true }));
    //TODO: Setup the static files
    app.use('/static', express.static('static'));
};
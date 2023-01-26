const express = require('express');
const hbs = require('express-handlebars');

const handlebars = hbs.create({
    extname: '.hbs'
});

module.exports = (server) => {
    // Set up the view engine
    server.engine('.hbs', handlebars.engine);
    server.set('view engine', '.hbs');

    // Set up the body parser 
    server.use(express.urlencoded({ extended: true }));

    // Set up the static files 
    server.use('/static', express.static('static'));
}
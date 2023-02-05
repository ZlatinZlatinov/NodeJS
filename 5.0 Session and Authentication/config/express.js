const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const handlebars = hbs.create({
    extname: '.hbs'
});


module.exports = (server) => {
    server.engine('.hbs', handlebars.engine);
    server.set('view engine', '.hbs'); // setting handlebars engine  

    server.use(express.urlencoded({ extended: true })); // bodyparser i guess

    server.use('/static', express.static('static')); // for static files

    server.use(cookieParser());
}
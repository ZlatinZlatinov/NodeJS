const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser'); // probably wont need it
const Handlebars = require('handlebars');
const cookieParser = require('cookie-parser');

const handlebars = hbs.create({
    extname: '.hbs'
});

// S tva raboti eee wooo! Used for making select with options
Handlebars.registerHelper('option', function (value, label, selectedValue) {
    var selectedProperty = value == selectedValue ? 'selected="selected"' : '';
    return new Handlebars.SafeString('<option value="' + value + '"' + selectedProperty + '>' + label + "</option>");
});


// Default set-up:
module.exports = (app) => {

    //Setting up the view engine
    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs'); // kato vinkem s nqkoi ot ruterite res. render('view') avtomaticho dobavq razshirenieto .hbs
    // app.set('views', '/src/views') ako iskame da promenim direktoriqta na view papkata

    //Setting up the body parser so that we can reaceive and use the request body
    app.use(express.urlencoded({ extended: true })); // midleware za upravlenie na formulqri

    //Settibg up the static files. From static folder we load the static files, like css, images ot others
    app.use('/static', express.static('static'));

    app.use(cookieParser());
};
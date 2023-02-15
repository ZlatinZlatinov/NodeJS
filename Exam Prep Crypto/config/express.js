const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');  
const Handlebars = require('handlebars');

Handlebars.registerHelper('option', function (value, label, selectedValue) {
    var selectedProperty = value == selectedValue ? 'selected="selected"' : '';
    return new Handlebars.SafeString('<option value="' + value + '"' + selectedProperty + '>' + label + "</option>");
});


module.exports = (app) => {
    const handlebars = hbs.create({
        extname: '.hbs'
    });

    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');
    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(cookieParser());
    app.use(auth);
}
const express = require('express');
const homeController = require('./viewControllers/homeController');
const aboutController = require('./viewControllers/aboutController'); 
const catalogController = require('./viewControllers/catalogController');

const hbs = require('express-handlebars'); // from here

const handlebars = hbs.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs'); //to here is boiler plate 

app.use('/static', express.static('static'));

app.use('/', homeController);  
app.use('/about', aboutController); 
app.use('/catalog', catalogController);

app.listen(3000);
console.log('The server is now running on port 3000...');
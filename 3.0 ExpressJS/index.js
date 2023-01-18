const express = require('express'); 
const viewControllersSrc = './viewControllers/'; 
const homeController = require(viewControllersSrc + 'homeController');
const aboutController = require(viewControllersSrc + 'aboutController');
const catalogController = require(viewControllersSrc + 'catalogController'); 
const createController = require(viewControllersSrc + 'createController');

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
app.use('/create', createController);

app.listen(3000, () => {
    console.log('The server is now running on port 3000...');
});

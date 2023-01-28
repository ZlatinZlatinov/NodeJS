const homeController = require('../controllers/homeController');
const cubeDetails = require('../controllers/cubeDetails');
const aboutView = require('../controllers/aboutView');
const createNewCube = require('../controllers/createNewCube'); 
const searchController = require('../controllers/searchController');
const notFound = require('../controllers/notFound');
const createAccessory = require('../controllers/createAccessory');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/about', aboutView);
    app.use('/accessory', createAccessory); 
    app.use('/create', createNewCube);
    app.use('/details', cubeDetails);
    app.use('/search', searchController); 
    app.use('*', notFound); 
};


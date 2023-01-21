const homeController = require('../controllers/homeController');
const cubeDetails = require('../controllers/cubeDetails');
const aboutView = require('../controllers/aboutView');
const createNewCube = require('../controllers/createNewCube');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/details', cubeDetails);
    app.use('/about', aboutView);
    app.use('/create', createNewCube);
};


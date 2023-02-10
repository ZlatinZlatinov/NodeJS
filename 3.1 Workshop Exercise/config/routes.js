const homeController = require('../controllers/homeController');
const cubeDetails = require('../controllers/cubeDetails');
const aboutView = require('../controllers/aboutView');
const createNewCube = require('../controllers/createNewCube'); 
const searchController = require('../controllers/searchController');
const notFound = require('../controllers/notFound');
const createAccessory = require('../controllers/createAccessory');
const editController = require('../controllers/editController');
const deleteController = require('../controllers/deleteController');
const loginController = require('../controllers/loginController');
const logOutController = require('../controllers/logOutController');
const registerController = require('../controllers/registerController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/about', aboutView);
    app.use('/accessory', createAccessory); 
    app.use('/create', createNewCube);
    app.use('/details', cubeDetails); 
    app.use('/delete', deleteController);
    app.use('/edit', editController); 
    app.use('/login', loginController); 
    app.use('/logout', logOutController); 
    app.use('/register', registerController);
    app.use('/search', searchController); 
    app.use('*', notFound); 
};


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
const isAuth = require('../middlewares/isAuth');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/about', aboutView);
    app.use('/accessory', isAuth, createAccessory); 
    app.use('/create', isAuth, createNewCube);
    app.use('/details', cubeDetails); 
    app.use('/delete', isAuth, deleteController);
    app.use('/edit', isAuth, editController); 
    app.use('/login', loginController); 
    app.use('/logout', logOutController); 
    app.use('/register', registerController);
    app.use('/search', searchController); 
    app.use('*', notFound); 
};


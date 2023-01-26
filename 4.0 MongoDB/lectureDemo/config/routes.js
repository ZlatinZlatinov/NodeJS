const homeController = require('../controllers/homeController'); 
const aboutController = require('../controllers/aboutController');
const createController = require('../controllers/createController');
const catalogController = require('../controllers/catalogController');

module.exports = (server) => {
    server.use('/', homeController); 
    server.use('/about', aboutController); 
    server.use('/create', createController); 
    server.use('/catalog', catalogController);
}
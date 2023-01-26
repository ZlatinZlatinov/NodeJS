const homeController = require('../controllers/homeController'); 
const aboutController = require('../controllers/aboutController');

module.exports = (server) => {
    server.use('/', homeController); 
    server.use('/about', aboutController);
}
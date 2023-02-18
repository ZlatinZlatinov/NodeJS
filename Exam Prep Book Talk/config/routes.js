const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
const editController = require("../controllers/editController");
const homeController = require("../controllers/homeControllers");
const loginController = require("../controllers/loginController");
const logOutController = require("../controllers/logOutController");
const detailsController = require('../controllers/detailsController') 
const notFound = require("../controllers/notFound");
const registerController = require("../controllers/registerController");
const isUser = require("../middlewares/isUser"); 
const deleteController = require("../controllers/deleteController");



module.exports = (app) => {
    app.use(homeController);
    app.use('/create', isUser, createController); 
    app.use('/catalog', catalogController); 
    app.use('/details', detailsController);
    app.use('/login', loginController); 
    app.use('/delete', deleteController);
    app.use('/edit', isUser, editController);
    app.use('/logout', logOutController);
    app.use('/register', registerController); 
    app.use('*', notFound);
}
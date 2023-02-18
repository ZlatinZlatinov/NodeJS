const createController = require("../controllers/createController");
const editController = require("../controllers/editController");
const homeController = require("../controllers/homeControllers");
const loginController = require("../controllers/loginController");
const logOutController = require("../controllers/logOutController");
const notFound = require("../controllers/notFound"); 
const findItem = require('../middlewares/findItem');
const registerController = require("../controllers/registerController");
const isUser = require("../middlewares/isUser");
const detailsController = require("../controllers/detailsController");
const deleteController = require("../controllers/deleteController");
const catalogController = require("../controllers/catalogController");


module.exports = (app) => {
    app.use(homeController);
    app.use('/create', isUser, createController); 
    app.use('/catalog', catalogController);
    app.use('/delete', isUser, deleteController);
    app.use('/details', findItem, detailsController); 
    app.use('/edit', isUser, findItem, editController);
    app.use('/login', loginController); 
    app.use('/logout', logOutController);
    app.use('/register', registerController); 
    app.use('*', notFound);
}
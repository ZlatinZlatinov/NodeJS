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
const wishController = require("../controllers/wishController");
const profileController = require("../controllers/profileController");
const findItem = require("../middlewares/findItem");



module.exports = (app) => {
    app.use(homeController);
    app.use('/create', isUser, createController); 
    app.use('/catalog', catalogController); 
    app.use('/details', findItem, detailsController);
    app.use('/login', loginController); 
    app.use('/delete', isUser, deleteController);
    app.use('/edit', isUser, findItem, editController);
    app.use('/logout', logOutController); 
    app.use('/profile', isUser, profileController);
    app.use('/register', registerController);  
    app.use('/wish', isUser, wishController);
    app.use('*', notFound);
}
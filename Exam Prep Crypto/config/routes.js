const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
const deleteController = require("../controllers/deleteController");
const detailsController = require("../controllers/detailsController");
const editController = require("../controllers/editController");
const homeController = require("../controllers/homeControllers");
const loginController = require("../controllers/loginController");
const logOutController = require("../controllers/logOutController");
const notFound = require("../controllers/notFound");
const registerController = require("../controllers/registerController");
const isUser = require("../middlewares/isUser"); 



module.exports = (app) => {
    app.use(homeController);
    app.use('/create', isUser, createController);
    app.use('/login', loginController); 
    app.use('/details', detailsController);
    app.use('/edit', isUser, editController); 
    app.use('/delete', isUser, deleteController);
    app.use('/logout', logOutController);
    app.use('/catalog', catalogController);
    app.use('/register', registerController); 
    //to do: add search if have time
    app.use('*', notFound);
}
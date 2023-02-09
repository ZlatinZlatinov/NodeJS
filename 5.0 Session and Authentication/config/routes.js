const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
const detailsController = require("../controllers/detailsController");
const editController = require("../controllers/editController");
const erorController = require("../controllers/errorController");
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const logOutController = require("../controllers/logOutController");
const registerController = require("../controllers/registerController");
const authorised = require("../middlewares/isAuthorised");
//const safeGuard = require("../middlewares/safeGuard");


module.exports = (server) => {
    server.use(homeController);
    server.use('/create', authorised, createController);
    server.use('/catalog', catalogController);
    server.use('/details', detailsController);
    server.use('/edit', authorised, editController);
    server.use('/login', loginController);
    server.use('/logout', logOutController);
    server.use('/register', registerController); 
    server.use('*', erorController);
}
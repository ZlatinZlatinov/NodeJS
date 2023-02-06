const catalogController = require("../controllers/catalogController");
const createController = require("../controllers/createController");
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
    server.use('/login', loginController);
    server.use('/logout', logOutController);
    server.use('/register', registerController);
}
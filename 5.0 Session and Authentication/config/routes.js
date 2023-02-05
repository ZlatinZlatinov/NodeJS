const createController = require("../controllers/createController");
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const logOutController = require("../controllers/logOutController");
const registerController = require("../controllers/registerController");
const safeGuard = require("../middlewares/safeGuard");


module.exports = (server) => {
    server.use(homeController);
    server.use('/login', loginController);
    server.use('/register', registerController);
    server.use('/create', safeGuard, createController);
    server.use('/logut', safeGuard, logOutController);
}
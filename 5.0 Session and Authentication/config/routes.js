const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");



module.exports = (server) => {
    server.use(homeController);
    server.use('/login', loginController); 
    server.use('/register', registerController);
}
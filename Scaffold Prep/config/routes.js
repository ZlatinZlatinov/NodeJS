const createController = require("../controllers/createController");
const editController = require("../controllers/editController");
const homeController = require("../controllers/homeControllers");
const loginController = require("../controllers/loginController");
const logOutController = require("../controllers/logOutController");
const registerController = require("../controllers/registerController");
const isUser = require("../middlewares/isUser");


module.exports = (app) => {
    app.use(homeController);
    app.use('/create', isUser, createController);
    app.use('/login', loginController);
    app.use('/edit', isUser, editController);
    app.use('/logout', logOutController);
    app.use('/register', registerController);
}
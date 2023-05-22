const authController = require("../controllers/authController");
const catalogControler = require("../controllers/catalogControllers");


module.exports = (app) => {
    app.use('/users', authController);
    app.use('/data', catalogControler);
}
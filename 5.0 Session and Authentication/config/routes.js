const homeController = require("../controllers/homeController");



module.exports = (server) => {
    server.use(homeController);
}
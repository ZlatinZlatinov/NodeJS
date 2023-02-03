const Accessorie = require("../models/Accessory");


async function createNewAccessory(accessoryObj) {
    await new Accessorie(accessoryObj).save();
} 

module.exports = {
    createNewAccessory
}
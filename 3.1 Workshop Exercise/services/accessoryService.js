const Accessorie = require("../models/Accessory");
//const Cube = require("../models/Cube");


async function createNewAccessory(accessoryObj) {
    await new Accessorie(accessoryObj).save();
}

async function getAllAccessories() {
    return await Accessorie.find({}).lean();
}

async function getAccUpdateList(idAccessory, idCube) {
    const accesory = await Accessorie.findById(idAccessory);
    if (accesory.cubes.includes(idCube)) {
        return true; // This accessory already has the cube.
    } else {
        await Accessorie.findById(idAccessory)
            .then((a) => {
                a.cubes.push(idCube);
                a.save();
            });
    }
    return false; // The accessory doesnt have the cube
}

module.exports = {
    createNewAccessory,
    getAllAccessories,
    getAccUpdateList
}
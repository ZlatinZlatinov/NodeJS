const Cube = require("../models/Cube");

async function searchForCube(name, from, to) {
    const cube = await Cube.find({ name: name }).lean();
    return cube;
}

async function searchCubeById(idCube, idAccessory) {
    const cube = await Cube.findById(idCube);
    if (cube.accessories.includes(idAccessory)) {
        return true; // The cube already has this accessory;
    } else {
        await Cube.findById(idCube)
            .then((c) => {
                c.accessories.push(idAccessory);
                c.save();
            });
    }
    return false;
}

async function findCubeById(cubeId) {
    try {
        return Cube.findById(cubeId).lean();
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function findCubeByName(name) {
    return Cube.find({ name });
}

module.exports = {
    searchForCube,
    searchCubeById,
    findCubeById,
    findCubeByName
}
const Cube = require("../models/Cube");

async function searchForCube(name, from, to) {
    const cube = await Cube.find({ name: name }).lean();
    return cube;
}

module.exports = {
    searchForCube
}
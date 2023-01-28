const Cube = require("../models/Cube");

async function createNewCube(cubeObj) {
    cubeObj.difficultyLevel = Number(cubeObj.difficultyLevel);
    const newCube = new Cube(cubeObj);
    await newCube.save();
    console.log('New cube was created succsefully');
}

module.exports = { createNewCube };
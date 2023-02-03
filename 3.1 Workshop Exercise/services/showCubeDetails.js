const Cube = require("../models/Cube");

async function showCubeDetails(cubeId){
    const cube = await Cube.findById(cubeId).lean(); 
    return cube;
} 

module.exports = {
    showCubeDetails
}
const Cube = require("../models/Cube");

async function showCubeDetails(cubeId){
    const cube = await Cube.findById(cubeId); 
    return cube;
} 

module.exports = {
    showCubeDetails
}
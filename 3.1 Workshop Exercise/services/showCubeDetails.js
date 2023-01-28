const Cube = require("../models/Cube");

async function showCubeDetails(cubeName){
    const cube = await Cube.findOne({}).where('name').equals(cubeName); 
    return cube;
} 

module.exports = {
    showCubeDetails
}
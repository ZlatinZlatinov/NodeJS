const Cube = require("../models/Cube");

async function getallCubes(){
    const cubesArray = await Cube.find({}).lean(); 
    return cubesArray;
} 

module.exports = {getallCubes};
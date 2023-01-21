const fs = require('fs'); 
const cubesUrl = './config/database.json'; 
const cubes = JSON.parse(fs.readFileSync(cubesUrl)); 

function getCubes(){
    return cubes;
}  

function getCubeDetails(id){
    return cubes.filter((c) => c.id == id)[0];
} 

function addNewCube(cube){
    const id = cubes.length + 1; 
    cube.id = id; 
    cubes.push(cube); 
    fs.writeFileSync(cubesUrl, JSON.stringify(cubes, null, 2));
}

module.exports =  {
    getCubes, 
    getCubeDetails, 
    addNewCube
}
const fs = require('fs'); 
const cubesUrl = './config/database.json'; 
const cubes = JSON.parse(fs.readFileSync(cubesUrl)); 

function getCubes(){
    return cubes;
} 

module.exports =  {
    getCubes
}
const fs = require('fs');
const cubesUrl = './config/database.json';
const cubes = JSON.parse(fs.readFileSync(cubesUrl));

/*This method is no longer supported!*/
function getCubes() { // returns all existing cubes in the inventory
    return cubes;
}

/*This method is no longer supported!*/ 
function getCubeDetails(id) { // getting a specific cube by its id
    return cubes.filter((c) => c.id == id)[0];
}

/*This method is no longer supported!*/ 
function addNewCube(cube) { // adding new cube to the list
    const id = cubes.length + 1;
    cube.id = id;
    cubes.push(cube);
    fs.writeFileSync(cubesUrl, JSON.stringify(cubes, null, 2));
}

/*This method is no longer supported!*/
function searchCube(searchedOject) { // some kind of search logic implemented xdd
    const searchedWord = searchedOject.search;
    let from, to;
    let arr = [];

    cubes.forEach((c) => {
        if ((c.name).includes(searchedWord) || (c.description).includes(searchedWord)) {
            arr.push(c);
        }
    });

    if (searchedOject.from != '') {
        from = Number(searchedOject.from);
        arr = arr.filter((c) => Number(c.difficultyLevel) >= from);
    }

    if (searchedOject.to != '') {
        to = Number(searchedOject.to);
        arr = arr.filter((c) => c.difficultyLevel < to);
    }

    if (arr.length == 0) {
        return cubes; // No search results were found
    }

    return arr;

}


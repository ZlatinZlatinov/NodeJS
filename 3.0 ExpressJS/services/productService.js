// методи за взминане на продукти от списъка 
// взимане на детайли за конкретен продукт 
// създаване, редактиране, изтриване на продукта 

const fs = require('fs') // using the File System you should use callbacks or async funcs
const partsUrl = './services/productList.json';
const autoParts = JSON.parse(fs.readFileSync(partsUrl));


function getParts() {
    return autoParts;
}

function getById(id) {
    return autoParts.filter((p) => p.id == id);
}

function addNewPart(partObj) {
    const partId = 'soml' + ('0000' + (Math.random() * 9999 | 0)).slice(-4);
    partObj.id = partId;
    autoParts.push(partObj);
    console.log(partObj);
    fs.writeFileSync(partsUrl, JSON.stringify(autoParts, null, 2)); // formats the json file correctly
}

module.exports = {
    getParts,
    getById,
    addNewPart
}
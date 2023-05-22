const Car = require('../models/Furniture');
//const Item = require('../models/Item');

async function loadAllItems() {
    return Car.find({}).lean();
}

async function getItemByName(name) {
    return Car.findOne({ name }); // returns an array
}

async function getItemById(id) {
    return Car.findById(id);
}

async function createItem(payload) {
    Car.create(payload);
}

async function updateItem(id, newItem) {
    Car.findById(id).then(async (item) => {
        item.model = newItem.model;
        item.make = newItem.make;
        item.year = Number(newItem.year);
        item.description = newItem.description;
        item.price = Number(newItem.Price);
        item.img = newItem.img;
        item.material = newItem.material;
        await item.save();
    });
}

async function deleteItem(id) {
    Car.findByIdAndDelete(id).then();
}

module.exports = {
    loadAllItems,
    getItemById,
    getItemByName,
    createItem,
    updateItem,
    deleteItem
}
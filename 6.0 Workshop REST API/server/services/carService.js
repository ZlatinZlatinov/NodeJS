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
    return Car.create(payload);
}

async function updateItem(id, item) {
    const existing = await Car.findById(id);

    existing.make = item.make;
    existing.model = item.model;
    existing.year = item.year;
    existing.description = item.description;
    existing.price = item.price;
    existing.img = item.img;
    existing.material = item.material;

    return existing.save();
}

async function deleteItem(id) {
    Car.findByIdAndDelete(id).then();
}

async function getUserItems(userId) {
    return Car.find({ _ownerId: userId });
}

module.exports = {
    loadAllItems,
    getItemById,
    getItemByName,
    createItem,
    updateItem,
    deleteItem, 
    getUserItems
}
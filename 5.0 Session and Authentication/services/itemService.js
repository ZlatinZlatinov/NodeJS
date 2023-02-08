const Item = require('../models/Item');


async function createNewItem(itemData) {
    await new Item(itemData).save();
}

async function getAllItems() {
    return Item.find({}).lean();
}

async function findItemById(itemId) {
    return Item.findById(itemId).lean();
}

async function findItemByName(itemName) {
    return Item.findOne({ itemName });
}

module.exports = {
    createNewItem,
    getAllItems,
    findItemById, 
    findItemByName
}
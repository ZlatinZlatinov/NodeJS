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

async function updateItem(itemId, name, img, desc, cat){
    Item.findByIdAndUpdate(itemId, {
        $set: { itemName: name, 
            imgUrl: img, 
            description: desc, 
            category: cat
        }
    }).then(item => item.save()); 
}

module.exports = {
    createNewItem,
    getAllItems,
    findItemById, 
    findItemByName, 
    updateItem
}
const  Book = require('../models/Item');

async function loadAllItems(){
    return Book.find({}).lean();
} 

async function getItemByName(name){
    return Book.find({name}); // returns an array
} 

async function getItemById(id){
    return Book.findById(id).lean();
} 

async function createItem(payload){
    Book.create(payload);
} 

async function updateItem(){
    // Book.findById(it).then((itmem) => { ... item.save()});
} 

async function deleteItem(id){
    // Book.findByIdAndDelete(id).then();
} 

module.exports = {
    loadAllItems, 
    getItemById, 
    getItemByName, 
    createItem, 
    updateItem, 
    deleteItem
}
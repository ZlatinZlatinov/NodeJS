const Book = require('../models/Item');

async function loadAllItems() {
    return Book.find({}).lean();
}

async function getItemByName(name) {
    return Book.find({ name }); // returns an array
}

async function getItemById(id) {
    return Book.findById(id).lean();
}

async function createItem(payload) {
    Book.create(payload);
}

async function updateItem(id, title, author, genre, stars, image, description) {
    Book.findById(id).then((book) => {
        book.title = title;
        book.author = author;
        book.genre = genre;
        book.stars = stars;
        book.image = image;
        book.description = description;
        book.save()
    });
}

async function deleteItem(id) {
    Book.findByIdAndDelete(id).then();
}

module.exports = {
    loadAllItems,
    getItemById,
    getItemByName,
    createItem,
    updateItem,
    deleteItem
}
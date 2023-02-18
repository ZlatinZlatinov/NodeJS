//TODO: change names according to the assignment 
const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stars: {
        type: Number, // between 1 - 5
        required: true
    },
    wishingList: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Book = model('Book', itemSchema);

module.exports = Book; 
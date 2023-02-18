//TODO: change names according to the assignment 
const {Schema, model } = require('mongoose'); 

const itemSchema = new Schema({
    name:{
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
    }
}); 

//const ItemName = model('', itemSchema); 

//module.exports = ;
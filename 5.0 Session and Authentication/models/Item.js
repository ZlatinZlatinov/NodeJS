const { Schema, model } = require('mongoose'); 

const itemSchema = new Schema({
    itemName: {type: String, required: true}, 
    imgUrl: {type: String, required: true}, 
    description: {
        type: String, 
        maxLength: 200
    }, 
    category: {type: String}, // for now, later I may change it, idk
    _ownerId: {type: Schema.Types.ObjectId, ref: 'User'}
}); 

const Item = model('Item', itemSchema); 

module.exports = Item;
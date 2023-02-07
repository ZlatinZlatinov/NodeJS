const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLenght: 4
    },
    password: {
        type: String,
        required: true,
        minLenght: 5
    }, 
    itemsList: [{type: Schema.Types.ObjectId, ref: 'Item'}]
});

const User = model('User', userSchema);

module.exports = User;
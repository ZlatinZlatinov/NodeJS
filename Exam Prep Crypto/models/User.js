const { Schema, model } = require('mongoose');

// TODO change specs according to the assignment!!!
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    cryptoList: [{ type: Schema.Types.ObjectId, ref: 'Crypto' }]
});

const User = model('User', userSchema);

module.exports = User;
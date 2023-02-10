const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    itemsList: [{ type: Schema.Types.ObjectId, ref: 'Cube' }]
});

const User = model('User', userSchema);

module.exports = User;
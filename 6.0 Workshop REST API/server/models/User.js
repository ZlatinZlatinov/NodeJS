const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    }
    //todo : add My-List
});

userSchema.index({email: 1},
{
    collation:{
        locale: 'en', 
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;
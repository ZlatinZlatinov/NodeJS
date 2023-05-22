const { Schema, model, Types: { ObjectId } } = require('mongoose');

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: true,
        minlength: [3, 'Car make must be at least 3 charactest long!']
    },
    model: {
        type: String,
        required: true,
        minlength: [3, 'Car model must be at least 3 charactest long!']
    },
    year: {
        type: Number,
        requred: true,
        validate: {
            validator: (value) => value >= 1950 && value <= 2024,
            message: 'Car year must be between 1950 and 2024!'
        }
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Car description must be at least 3 charactest long!']
    },
    price: {
        type: Number,
        requred: true,
        min: [0.001, 'Car price must be positive number!']
    },
    img: {
        type: String,
        requred: [true, 'Img url is required!']
    },
    material: {
        type: String,
        default: ''
    },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
});

const Car = model('Car', furnitureSchema); 

module.exports = Car;
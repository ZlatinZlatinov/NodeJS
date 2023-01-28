const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxLength: 100 },
    imgUrl: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return this.imgUrl.sratsWith('http')
                    || this.imgUrl.startsWith('https');
            },
            message: props => `${props.value} is not a valid image URL!`
        }
    },
    difficultyLevel: {
        type: Number,
        min: [0, 'Must be atleast 0, got {VALUE}'],
        max: [10, 'Must be maximum 10, got {VALUE}']
    },
    accessories: [{ type: Schema.Types.ObjectId, ref: 'Accessorie' }]
});

const Cube = model('Cube', cubeSchema); 

module.exports = Cube;
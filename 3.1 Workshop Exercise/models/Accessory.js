const { Schema, model } = require('mongoose');

const accessorieSchema = new Schema({
    name: { type: String, rquired: true },
    description: { type: String, required: true, maxLength: 200 },
    imgUrl: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return String(this.imgUrl).startsWith('http')
                    || String(this.imgUrl).startsWith('https');
            },
            message: props => `${props.value} is not a valid image URL!`
        }
    },
    cubes: [{ type: Schema.Types.ObjectId, ref: 'Cube' }]
});

const Accessorie = model('Accessorie', accessorieSchema);

module.exports = Accessorie;
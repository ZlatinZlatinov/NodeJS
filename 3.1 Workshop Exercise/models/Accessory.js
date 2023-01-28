const {Schema, model} = require('mongoose'); 

const accessorieSchema = new Schema({
    name: {type: String, rquired: true}, 
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
    description: { type: String, required: true, maxLength: 100 }, 
    cubes: [{type: Schema.Types.ObjectId, ref: 'Cube'}]
}); 

const Accessorie = model('Accessorie', accessorieSchema); 

module.exports = Accessorie;
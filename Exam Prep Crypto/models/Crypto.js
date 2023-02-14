const { Schema, model } = require('mongoose');

const cryptoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: '{VALUE} is not valid'
        }
    },
    buyCrypto: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;
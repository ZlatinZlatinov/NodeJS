const Crypto = require('../models/Crypto');

async function loadAllCrypto() {
    return Crypto.find({}).lean();
}

async function findCryptoById(cryptoId) {
    return Crypto.findById(cryptoId).lean(); //chec for errors
}

async function findCryptoByName(name) {
    return Crypto.find({ name });
}

async function createCrypto(payload) {
    Crypto.create(payload);
}

async function updateCrypto(id, name, image, price, description, paymentMethod) {
    Crypto.findById(id).then((crypto) => {
        crypto.name = name;
        crypto.image = image;
        crypto.price = price;
        crypto.description = description;
        crypto.paymentMethod = paymentMethod;
        crypto.save()
    });
    // }).catch((err) => {
    //     console.log('No such crypto!');
    //     //throw  [{msg: 'No such crypto!'}];
    // });
}

async function deleteCrypto(id) {
    Crypto.findByIdAndDelete(id).then();
}


module.exports = {
    loadAllCrypto,
    findCryptoById,
    createCrypto,
    findCryptoByName,
    updateCrypto, 
    deleteCrypto
}
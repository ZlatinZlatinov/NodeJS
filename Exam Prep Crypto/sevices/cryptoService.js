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


module.exports = {
    loadAllCrypto,
    findCryptoById,
    createCrypto, 
    findCryptoByName
}
const User = require('../models/User');
const { hashPassword } = require('./bcryptService');
const { signToken } = require('./tokenService');

async function findByUsername(username) {
    return User.find({ username }); // return lean if needed 
    // returns and array
}

async function findByUserId(userId) {
    return User.findById(userId); // check if no user is found 
    // if found returns a user object
}

async function createUser(username, password) {
    try {
        const hashed = await hashPassword(password);
        User.create({ username, password: hashed });
    } catch (err) {
        console.log(err);
    }
}

async function logUser(username, id) {
    const token = signToken({ id, username });

    return token;
}

module.exports = {
    findByUsername,
    findByUserId,
    createUser, 
    logUser
}
const User = require('../models/User');
const { hashPassword } = require('../services/bcryptService');

async function findByUsername(username) {
    return User.find({ username }); // I thin it returns an array?
}

async function findByUserId(userId) {
    return User.findById(userId); // nz ko vrushta
}

async function createUser(username, password) {
    try {
        const hashed = await hashPassword(password);

        const userDataObj = {
            username: username,
            password: hashed
        }

        await new User(userDataObj).save();
        console.log('New User registered succesfully!');
    } catch (err) {
        console.log('Oops, something went wrong during creating new user!');
        console.log(err.message);
    }
}

module.exports = {
    findByUsername,
    findByUserId,
    createUser
}
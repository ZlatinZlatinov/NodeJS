const User = require('../models/User'); 

async function findByUsername(username){
    return User.find({username}); // I thin it returns an array?
} 

async function findByUserId(userId){
    return User.findById(userId); // nz ko vrushta
} 

async function createUser(userDataObj){
    // wait for hashed pass
    new User(userDataObj).save();
}

module.exports = {
    findByUsername, 
    findByUserId, 
    createUser
}
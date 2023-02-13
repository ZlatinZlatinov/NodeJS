const User = require('../models/User');

async function findByUsername(username) {
    return User.find({ username }); // return lean if needed 
    // returns and array
}

async function findByUserId(userId) {
    return User.findById(userId); // check if no user is found 
    // if found returns a user object
} 

async function createUser(username, password){
    try {
        // to do add hashing service
    } catch(err){
        console.log(err);
    }
} 

module.exports = {
    findByUsername, 
    findByUserId, 
    createUser
}
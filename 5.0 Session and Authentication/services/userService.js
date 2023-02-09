const User = require("../models/User");
const { hashPassword } = require("./hashService");

async function findByUsername(username) {
    try {
        const user = await User.find({ username });
        return user;
    } catch (err) {
        console.log(err.message);
        // Problem solved xdd
    }
}

async function findUserById(id) {
    return User, findUserById(id);
}

async function createUser(username, password) {
    const hashed = await hashPassword(password);
    const userObj = {
        username,
        password: hashed
    }
    await new User(userObj).save();
} 

async function updateUserList(userId, itemId){
    User.findById(userId)
    .then((user) => {
        const index = user.itemsList.indexOf(itemId); 
        user.itemsList.splice(index, 1); 
        user.save();
    });
}



module.exports = {
    findByUsername,
    createUser, 
    findUserById, 
    updateUserList
}
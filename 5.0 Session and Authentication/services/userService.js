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

async function createUser(username, password) {
    const hashed = await hashPassword(password);
    const userObj = {
        username,
        password: hashed
    }
    await new User(userObj).save();
}



module.exports = {
    findByUsername,
    createUser
}
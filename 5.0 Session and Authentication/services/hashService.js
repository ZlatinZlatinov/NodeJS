const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hashPassword(password){
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            return hash;
        });
    });
} 

module.exports = {
    hashPassword
}

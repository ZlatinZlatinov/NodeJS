const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hashPassword(rawPass) {
    const hashed = bcrypt
        .hash(rawPass, saltRounds)
        .then((hashed) => {
            return hashed;
        })
        .catch(err => {
            console.log('Oops, something went wron durind hashing the password :(');
            return;
        });

    return hashed;
}

async function checkPassword(logPass, hashedPass) {
    return bcrypt
        .compare(logPass, hashedPass)
        .then(result => result);
} 

module.exports = {
    hashPassword, 
    checkPassword
}
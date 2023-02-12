const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hashPassword(rawPass) {
    const hashed = bcrypt
        .hash(rawPass, saltRounds)
        .then((hashh) => {
            return hashh;
        })
        .catch(err => {
            console.log(err.message);
        });

    return hashed;
}

async function checkPassword(logPass, hashedPass) {
    return bcrypt
        .compare(logPass, hashedPass)
        .then((res) => res);
}

module.exports = {
    hashPassword,
    checkPassword
}

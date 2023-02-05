const bcrypt = require('bcrypt');

const saltRounds = 10;

async function hashPassword(password) {
    const hashed = await bcrypt
        .hash(password, saltRounds)
        .then((hhs) => {
            return hhs;
        }); // I gues this is how it is supposed to workd xdd

    return hashed;
}


async function checkPassword(logPass, hashedPass) {
    bcrypt.compare(logPass, hashedPass, (err, res) => {
        return res;
    });
}
module.exports = {
    hashPassword,
    checkPassword
}

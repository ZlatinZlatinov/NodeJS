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
   
    return bcrypt.compare(logPass, hashedPass).then((res) =>{
        return res;
    });

    //return result;
}
module.exports = {
    hashPassword,
    checkPassword
}

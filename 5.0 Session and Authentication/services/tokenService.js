const jwt = require('jsonwebtoken');
const secret = 'cherven-karton-za-Mario-Metushev';


function signToken(payload) { // I guess this might be an async function but idk..
    const options = { expiresIn: '4h' };
    const token = jwt.sign(payload, secret, options);
    return token;
}

function verifyToken(token) {

    const decodedToken = jwt.verify(token, secret);

    //console.log(err.message);
    return decodedToken;
}

module.exports = {
    signToken,
    verifyToken
}
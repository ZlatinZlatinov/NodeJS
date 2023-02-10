const jwt = require('jsonwebtoken');
const secret = '1.9TDI++';

function signToken(payload) {
    const options = { expiresIn: '4h' };
    const token = jwt.sign(payload, secret, options);
    return token;
}

function verifyToken(token) {
    const decodedToken = jwt.verify(token, secret);

    return decodedToken;
}

module.exports = {
    signToken, 
    verifyToken
}
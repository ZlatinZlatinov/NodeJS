const jwt = require('jsonwebtoken');
const secret = '1.9TDI++';

function signToken(payload) {
    const options = { expiresIn: '4h' };
    const token = jwt.sign(payload, secret, options);
    return token;
} 

function verifyToken(token){
    const result = jwt.verify(token, secret); 
    // if token is not verified it throws an error
    return result;
} 

module.exports = {
    signToken, 
    verifyToken
}
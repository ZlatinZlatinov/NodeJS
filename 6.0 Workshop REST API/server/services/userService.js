const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = 'suuuiiii';

async function register(email, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('Email is already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        hashedPassword
    });

    return createToken(user);
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Wrong username or password!');
    }

    const hashedPassword = user.hashedPassword;
    const match = await bcrypt.compare(password, hashedPassword);

    if (!match) {
        throw new Error('Wrong username or password!');
    }

    return createToken(user);
}

async function logout() {

}

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }

    return {
        _id: user._id,
        email: user.email,
        accessToken: jwt.sign(payload, secret)
    }
}

module.exports = {
    register,
    login,
    logout
}
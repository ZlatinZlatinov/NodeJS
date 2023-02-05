const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/forest';

async function connectDB() {
    mongoose.set('strictQuery', false);
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Databasse connected!');
}

module.exports = { connectDB };
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:2017/furniture';

async function connectDB() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected!');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = {
    connectDB
}
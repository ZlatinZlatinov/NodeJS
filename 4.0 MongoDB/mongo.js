const mongoose = require('mongoose');
const createNewPerson = require('./savingData');

const link = 'mongodb://localhost:27017/testdb';

async function connectDB() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(link, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Database connected!');
    createNewPerson()
}

connectDB();
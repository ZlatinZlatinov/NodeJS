const mongoose = require('mongoose');
const createNewPerson = require('./savingData');

const link = 'mongodb://localhost:27017/testdb2';

//I guess all of this is a boilerplate idk

async function connectDB() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(link, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    console.log('Database connected!');
    await createNewPerson();

}

connectDB();
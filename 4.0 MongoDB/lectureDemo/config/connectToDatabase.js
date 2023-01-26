const mongoose = require('mongoose'); 

const link = 'mongodb://localhost:27017/testdb3'; 

async function connectDB(){
    mongoose.set('strictQuery', false); 
    await mongoose.connect(link, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }); 

    console.log('Database Connected!');
} 

module.exports = connectDB;
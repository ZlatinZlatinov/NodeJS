const mongoose = require('mongoose'); 

const dbUrl = 'mongodb://localhost:27017/cubes'; 

async function connectDB(){
    mongoose.set('strictQuery', false); //idk what this does?? 
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }); 
    console.log('Database connected!');
} 

module.exports = connectDB;
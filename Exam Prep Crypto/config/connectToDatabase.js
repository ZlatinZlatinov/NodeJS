const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/crypto'; 

async function connectDB(){
    mongoose.set('strictQuery', false); //idk what this is, but if i dont set it to false, I get errors
    mongoose.connect(dbUrl, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }); 
    console.log('Database connected!');
} 

module.exports = {
    connectDB
}
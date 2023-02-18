const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/bookTalk'; 

async function connectDB(){ 
    try {
    mongoose.set('strictQuery', false); //idk what this is, but if i dont set it to false, I get errors
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }); 
    console.log('Database connected!'); 
    } catch(err){
        console.error(err.message); 
        process.exit(1);
    }
} 

module.exports = {
    connectDB
}
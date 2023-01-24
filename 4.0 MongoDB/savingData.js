const mongoose = require('mongoose'); 

async function createNewPerson(){

const studenSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    facultyNumber: {type: Number, required: true}, 
    age: {type: Number}
}); 

const Student = mongoose.model('Student', studenSchema); 

const myPerson = new Student({
    firstName: "Dave", 
    lastName: "Bautista", 
    facultyNumber: 201, 
    age: 23
}); 

await myPerson.save(); 

const data = await Student.find({}); 
console.log(data);
} 

module.exports = createNewPerson;

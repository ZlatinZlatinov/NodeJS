const mongoose = require('mongoose');

async function createNewPerson() {

    const studenSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        facultyNumber: {
            type: String,
            required: [true, 'Faculty number is required!'],
            enum: {
                values: ['50121', '50122'],
                message: '{VALUE} is not valid!'
            }
        },
        age: {
            type: Number,
            min: [18, 'Must be atleast 18, got {VALUE}'],
            max: 50
        }
    });

    studenSchema.path('firstName')
        .validate(function () {
            return this.firstName.length >= 2
                && this.firstName.length <= 10;
        }, 'First name must be between 2 and 10 sybols long!');
    // .valudate is a custom function that sets the length for the firstName 
    // and after the function u can set in a string with error message

    studenSchema
        .virtual('fullName').get((function () {
            return this.firstName + ' ' + this.lastName + ' Suiiii!';
        })); 
    // returns the fullname of the student    

    const Student = mongoose.model('Student', studenSchema);

    const newStudent = new Student({
        firstName: "Cristiano ",
        lastName: "Ronaldo",
        facultyNumber: '50122',
        age: 37
    });

    await newStudent.save();
    console.log('New Student created!');

    const data = await Student.find({}); // returns an array with collection of objects
    console.log(data[1].get('fullName'));
}

module.exports = createNewPerson;

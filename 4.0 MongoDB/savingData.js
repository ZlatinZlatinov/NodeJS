const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

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
        },
        subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
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

    // <--------- Subjects -------------> 
    const subjectSchema = new Schema({
        title: String,
        joindedStudents: [{ type: [Schema.Types.ObjectId], ref: Student }]
    });
    const Subject = model('Subject', subjectSchema);

    // const newStudent = new Student({
    //     firstName: "Andres ",
    //     lastName: "Iniesta",
    //     facultyNumber: '50122',
    //     age: 35
    // }); 

    // const newSubject = new Subject({
    //     title: 'Maths'
    // });
    //await newStudent.save(); 
    // await newSubject.save();
    // console.log('New Student created!');

    // The Schema creating should be in another modue, and
    // the creating of the new Student/Person should also be in 
    // in separate module so that it can receive the params 




    //const studentsData = await Student.find({}); // returns an array with collection of objects 
    //const subjectsData = await Subject.find({});
    //const searchedStudent = await Student.findOne({'firstName': 'Andres'});
    //const subject = await Subject.findOne({});
    //subjectsData[0].joindedStudents.push(studentsData[2]); 
    //await subjectsData[0].save();
    // referirane kum 2 razlichi modela
    console.log(searchedStudent);
}

module.exports = createNewPerson;

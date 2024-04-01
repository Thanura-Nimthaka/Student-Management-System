import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    fname: {type: String, required: true },
    lname: {type: String},
    regno: {type: String, required: true, unique: true },
    gender: {type: String},
    age: {type: String},
    bday: {type: String},
    intake: {type: String, required: true},
    address: {type: String},
    mnumber: {type: String},
    degree: {type: String, required: true},

    
})

const studentModel = mongoose.model('Student', studentSchema)

export {studentModel as Student}
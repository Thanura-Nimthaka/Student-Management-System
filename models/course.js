import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    cname: {type: String, required: true },
    cID: {type: String, required: true, unique: true},
    semester: {type: String, required: true }
})

const courseModel = mongoose.model('Course', courseSchema)

export {courseModel as Course}
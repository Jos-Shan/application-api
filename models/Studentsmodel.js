const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    Name: { type: String, required: true, trim: true },
    Email: { type: String, required: true, unique: true, lowercase: true },
    Phone: { type: String, required: true, trim: true },
    Birthdate: { type: Date, required: true, trim: true },
    Age: { type: Number, required: true, trim: true },
    Cohort: { type: String, required: true, trim: true },
    Status: { type: String, required: true, trim: true },
    Assessment: { type: ObjectId, ref: "Assessment"}
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;




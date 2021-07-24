let mongoose = require('mongoose');
let validator = require('validator');

const ApplicationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value =>{
            if(!validator.isEmail(value)){
                throw new Error ({error: 'Invalid email address'})
            }
        }
    },
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    birthdate: { type: Date, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    children: { type: String, required: true, trim: true },
    numberofchildren: { type: Number, required: true, trim: true },
    education: { type: String, required: true, trim: true },
    occupation: { type: String, required: true, trim: true },
    income: { type: String, required: true, trim: true },
    laptop: { type: Boolean, required: true, trim: true },
    data_access: { type: Boolean, required: true, trim: true },
    access_to_classes: { type: Boolean, required: true, trim: true },
    opportunity: { type: String, required: true, trim: true },
    which_media_channel: { type: String, required: true, trim: true  },
    why_this_course: { type: String, required: true, trim: true },
});

var Application = module.exports = mongoose.model("Application", ApplicationSchema);

module.exports.get = function(callback, limit){
    Application.find(callback).limit(limit);
}

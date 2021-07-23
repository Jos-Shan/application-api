var mongoose = require('mongoose');


const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    birthdate: { type: Date, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    status: { type: String, required: true, trim: true },
    children: { type: String, required: true, trim: true },
    numberofchildren: { type: String, required: true, trim: true },
    education: { type: String, required: true, trim: true },
    occupation: { type: String, required: true, trim: true },
    income: { type: String, required: true, trim: true },
    laptop: { type: String, required: true, trim: true },
    data_access: { type: String, required: true, trim: true },
    access_to_classes: { type: String, required: true, trim: true },
    opportunity: { type: String, required: true, trim: true },
    which_media_channel: { type: String, required: true, trim: true  },
    why_this_course: { type: String, required: true, trim: true },
});

const Application = module.exports = mongoose.model("Application", schema);


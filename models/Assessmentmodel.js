const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AssessmentsSchema = new Schema({
    HTML: { type: Number, required: true, trim: true },
    CSS: { type: Number, required: true, trim: true },
    JavaScript: { type: Number, required: true, trim: true },
    Facilitator_rating: { type: String, required: true, trim: true },
    hackathon: { type: String, required: true, trim: true },
});


const Assessment = mongoose.model('Assessment', AssessmentsSchema);

module.exports = Assessment;




const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ligueModel = new Schema({
    name: {
        type: String,
        required: true
    },
    pub: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Pub'
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('Ligue', ligueModel);

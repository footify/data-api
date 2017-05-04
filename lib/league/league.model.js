const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leagueModel = new Schema({
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
        required: false
    },
    end_date: {
        type: Date,
        required: false
    }
}, { timestamp: true });

module.exports = mongoose.model('League', leagueModel);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ligueRankingModel = new Schema({
    ligue: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Ligue'
    },
    team: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Team'
    },
    point: {
        type: Number,
        required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('LigueRanking', ligueRankingModel);

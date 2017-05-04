const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leagueRankingModel = new Schema({
    league: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'League'
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

module.exports = mongoose.model('LeagueRanking', leagueRankingModel);

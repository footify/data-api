const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameModel = new Schema({
    babyfoot: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Babyfoot'
    },
    teams: [
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Team'
        }
    ],
    winner: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Team'
    },
    scores: [
        {
            type: Number,
            required: false
        }
    ],
    start_date: {
        type: Date,
        required: false
    },
    end_date: {
        type: Date,
        required: false
    }
}, { timestamp: true });

module.exports = mongoose.model('Game', gameModel);

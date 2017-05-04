const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameModel = new Schema({
    babyfootId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    teams: [
      {
        type: Schema.Types.ObjectId,
        required: true
      }
    ],
    winner: {
      type: Schema.Types.ObjectId,
      required: false
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

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    player1: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    player2: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamp: true });

module.exports = mongoose.model('Team', teamSchema);

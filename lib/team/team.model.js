const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    players: [{
      type: Schema.Types.Objectid,
      required: true,
      ref: 'User'
    }],
    name: {
      type: String,
      required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('Team', teamSchema);

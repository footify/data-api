const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    players: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('Team', teamSchema);

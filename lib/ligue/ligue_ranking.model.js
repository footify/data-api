const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ligueRankingModel = new Schema({
    ligueId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    teamId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    point: {
      type: Number,
      required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('LigueRanking, friendSchema);

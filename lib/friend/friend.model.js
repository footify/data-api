const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true
    },
    accepted: {
      type: Boolean,
      required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('Friend', friendSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pubSchema = new Schema({
    googleId: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    street_number: {
      type: String,
      required: true
    },
    street_name: {
      type: String,
      required: true
    },
    zip_code: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: false
    },
    open_at: {
      type: String,
      required: false
    },
    close_at: {
      type: String,
      required: false
    },
    admins: [{
      type: Schema.Types.ObjectId,
      required: false,
      ref: 'User'
    }],
    league: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'League'
    },
    pictureUrl: {
      type: String,
      required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('Pub', pubSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const babyfootSchema = new Schema({
    pubId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    manufacturer: {
      type: String,
      required: true
    },
    qrCodeUrl: {
      type: String,
      required: true
    }
}, { timestamp: true });

module.exports = mongoose.model('Babyfoot', babyfootSchema);

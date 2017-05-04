const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const babyfootSchema = new Schema({
    pub: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Pub'
    },
    name: {
        type: String,
        required: true
    },
    pictureUrl: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    qrCodeUrl: {
        type: String,
        required: false
    }
}, { timestamp: true });

module.exports = mongoose.model('Babyfoot', babyfootSchema);

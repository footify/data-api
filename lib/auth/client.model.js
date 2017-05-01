const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    key: {
        type: String,
        unique: true
    },
    secret: {
        type: String,
        unique: true
    },
    trusted: {
        type: Boolean,
        default: true
    }}, {timestamps: true});

module.exports = mongoose.model('Client', clientSchema);
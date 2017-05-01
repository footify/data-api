const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    facebookId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    pictureUrl: {
        type: String
    }
}, { timestamp: true });

module.exports = mongoose.model('User', userSchema);
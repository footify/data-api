const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    token: {
        type: String,
        required: true
    },
    revoked: {
        type: Boolean,
        required: true,
        default: false
    },
    expirationDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('RefreshToken', refreshTokenSchema);

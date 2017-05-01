const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accessTokenSchema = new Schema({
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
    expirationDate: {
        type: Date,
        required: true
    },
    revoked: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

module.exports = mongoose.model('AccessToken', accessTokenSchema);

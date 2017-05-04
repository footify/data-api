const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const friendListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    waitingAnswer: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    waitingApproval: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    accepted: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamp: true });

module.exports = mongoose.model('FriendList', friendListSchema);

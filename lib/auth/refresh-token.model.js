import * as mongoose from 'mongoose';

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

export default mongoose.model('RefreshToken', refreshTokenSchema);

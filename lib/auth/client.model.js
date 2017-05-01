import * as mongoose from 'mongoose';

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

export default mongoose.model('Client', clientSchema);
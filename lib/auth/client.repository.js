const model = require('./client.model.js');
import * as utils from '../utils';

export async function create(name) {
    const client = {
        name: name,
        key: utils.uidGen(12),
        secret: utils.uidGen(20),
        trusted: true
    };

    return await model.create(client);
}

export async function getByName(name) {
    return await model.findOne({ name: name });
}

export async function getByKey(key) {
    return await model.findOne({ key: key });
}

export async function getByCredential(key, secret) {
    return await model.findOne({ key: key, secret: secret});
}
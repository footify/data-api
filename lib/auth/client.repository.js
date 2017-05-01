const utils = require('../utils');
const model = require('./client.model.js');

async function create(name) {
    const client = {
        name: name,
        key: utils.uidGen(12),
        secret: utils.uidGen(20),
        trusted: true
    };

    return await model.create(client);
}

async function getByName(name) {
    return await model.findOne({ name: name });
}

async function getByKey(key) {
    return await model.findOne({ key: key });
}

async function getByCredential(key, secret) {
    return await model.findOne({ key: key, secret: secret});
}

module.exports = {
    create: create,
    getByName: getByName,
    getByKey: getByKey,
    getByCredential: getByCredential
};
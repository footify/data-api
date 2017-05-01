const utils = require('../utils');
const model = require('./client.model.js');

function create(name) {
    const client = {
        name: name,
        key: utils.uidGen(12),
        secret: utils.uidGen(20),
        trusted: true
    };

    return model.create(client)
        .then((client) => {
            return client;
        });
}

function getByName(name) {
    return model.findOne({ name: name })
        .then((client) => {
            return client;
        });
}

function getByKey(key) {
    return model.findOne({ key: key })
        .then((client) => {
            return client;
        });
}

function getByCredential(key, secret) {
    return model.findOne({ key: key, secret: secret})
        .then((client) => {
            return client;
        });
}

module.exports = {
    create: create,
    getByName: getByName,
    getByKey: getByKey,
    getByCredential: getByCredential
};
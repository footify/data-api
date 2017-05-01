const utils = require('../utils');
const model = require('./access-token.model.js');

const accessTokenDuration = 3600; // 1H

async function create(client, user) {
    const accessToken = {
        client: client,
        user: user,
        token: utils.uidGen(256),
        expirationDate: new Date(new Date().getTime() + accessTokenDuration)
    };

    return await model.create(accessToken);
}

async function getByToken(token) {
    return await model.findOne({ token: token});
}

async function getByClientToken(client, token) {
    return await model.findOne({
        client: client,
        token: token,
        revoked: false,
        expirationDate: { $gt: new Date() }});
}

async function revoke(accessToken) {
    accessToken.revoked = true;
    return await accessToken.save();
}

module.exports = {
    duration: accessTokenDuration,
    create: create,
    getByToken: getByToken,
    getByClientToken: getByClientToken,
    revoke: revoke
};
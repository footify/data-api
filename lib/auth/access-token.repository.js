const utils = require('../utils');
const model = require('./access-token.model.js');

const accessTokenDuration = 3600; // 1H

function create(client, user) {
    const accessToken = {
        client: client,
        user: user,
        token: utils.uidGen(256),
        expirationDate: new Date(new Date().getTime() + accessTokenDuration)
    };

    return model.create(accessToken)
        .then((accessToken) => {
            return accessToken;
        });
}

function getByToken(token) {
    return model.findOne({ token: token})
        .then((accessToken) => {
            return accessToken;
        });
}

function getByClientToken(client, token) {
    return model.findOne({
        client: client,
        token: token,
        revoked: false,
        expirationDate: { $gt: new Date() }})
        .then((accessToken) => {
            return accessToken;
        });
}

function revoke(accessToken) {
    accessToken.revoked = true;
    return accessToken.save()
        .then((accessToken) => {
            return accessToken;
        });
}

module.exports = {
    duration: accessTokenDuration,
    create: create,
    getByToken: getByToken,
    getByClientToken: getByClientToken,
    revoke: revoke
};
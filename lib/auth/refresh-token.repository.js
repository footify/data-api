const utils = require('../utils');
const model = require('./refresh-token.model.js');


export const refreshTokenDuration = 3600 * 60 * 24; // 1 Day


function create(client, user) {
    const refreshToken = {
        client: client,
        user: user,
        token: utils.uidGen(256),
        expirationDate: new Date(new Date().getTime() + refreshTokenDuration)
    };

    return model.create(refreshToken)
        .then((refreshToken) => {
            return refreshToken;
        });
}

function getByToken(token) {
    return model.findOne({ token: token })
        .then((refreshToken) => {
            return refreshToken;
        });
}

function getByClientToken(client, token) {
    return model.findOne({
        client: client,
        token: token,
        revoked: false,
        expirationDate: { $gt: new Date() }
    }).then((refreshToken) => {
        return refreshToken;
    });
}

function revokeToken(token) {
    token.revoked = true;
    return token.save()
        .then(() => {
            return token;
        });
}

module.exports = {
    duration: refreshTokenDuration,
    create: create,
    getByToken: getByToken,
    getByClientToken: getByClientToken,
    revokeToken: revokeToken
};
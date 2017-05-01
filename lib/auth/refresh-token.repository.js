import * as utils from '../utils';
const model = require('./refresh-token.model.js');


export const refreshTokenDuration = 3600 * 60 * 24; // 1 Day


export async function create(client, user) {
    const refreshToken = {
        client: client,
        user: user,
        token: utils.uidGen(256),
        expirationDate: new Date(new Date().getTime() + refreshTokenDuration)
    };

    return await model.create(refreshToken);
}

export async function getByToken(token) {
    return await model.findOne({ token: token });
}

export async function getByClientToken(client, token) {
    return await model.findOne({
        client: client,
        token: token,
        revoked: false,
        expirationDate: { $gt: new Date() }
    });
}

export async function revokeToken(token) {
    token.revoked = true;
    return await token.save();
}
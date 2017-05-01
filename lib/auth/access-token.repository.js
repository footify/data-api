const model = require('./access-token.model.js');
import * as utils from '../utils';

export const accessTokenDuration = 3600; // 1H

export async function create(client, user) {
    const accessToken = {
        client: client,
        user: user,
        token: utils.uidGen(256),
        expirationDate: new Date(new Date().getTime() + accessTokenDuration)
    };

    return await model.create(accessToken);
}

export async function getByToken(token) {
    return await model.findOne({ token: token});
}

export async function getByClientToken(client, token) {
    return await model.findOne({
        client: client,
        token: token,
        revoked: false,
        expirationDate: { $gt: new Date() }});
}

export async function revoke(accessToken) {
    accessToken.revoked = true;
    return await accessToken.save();
}
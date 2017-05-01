const Joi = require('joi');
const _ = require('lodash');

function uidGen (len) {
    const buf = [];
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charlen = chars.length;

    for (let i = 0; i < len; ++i) {
        buf.push(chars[getRandomInt(0, charlen - 1)]);
    }

    return buf.join('');
}

function validateModel(data, schema) {
    return Joi.validate(data, schema, {stripUnknown: true});
}

function toSnakeCase(obj) {
    return _.mapKeys(obj, (value, key) => {
        return _.snakeCase(key);
    });
}

module.exports = {
    uidGen: uidGen,
    validateModel: validateModel,
    toSnakeCase: toSnakeCase
};
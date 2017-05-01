const model = require('./user.model');

async function create(facebookId, email, pseudo, firstName, lastName) {
    const user = {
        facebookId: facebookId,
        email: email,
        pseudo: pseudo,
        firstName: firstName,
        lastName: lastName
    };

    return await model.create(user);
}

async function getById(id) {
    return await model.findOne({ _id: id });
}

async function getByFacebookEmail(facebookId, email) {
    return await model.findOne({ facebookId: facebookId, email: email });
}

async function getByEmail(email) {
    return await model.findOne({ email: email });
}

async function getByPseudo(pseudo) {
    return await model.findOne({ pseudo: pseudo });
}

module.exports = {
    create: create,
    getById: getById,
    getByFacebookEmail: getByFacebookEmail,
    getByEmail: getByEmail,
    getByPseudo: getByPseudo
};
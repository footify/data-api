const model = require('./user.model');

function create(facebookId, email, pseudo, firstName, lastName) {
    const user = {
        facebookId: facebookId,
        email: email,
        pseudo: pseudo,
        firstName: firstName,
        lastName: lastName
    };

    return model.create(user)
        .then((user) => {
            return user;
        });
}

function getById(id) {
    return model.findOne({ _id: id })
        .then((user) => {
            return user;
        });
}

function getByFacebookEmail(facebookId, email) {
    return model.findOne({ facebookId: facebookId, email: email })
        .then((user) => {
            return user;
        });
}

function getByEmail(email) {
    return model.findOne({ email: email })
        .then((user) => {
            return user;
        });
}

function getByPseudo(pseudo) {
    return model.findOne({ pseudo: pseudo })
        .then((user) => {
            return user;
        });
}

module.exports = {
    create: create,
    getById: getById,
    getByFacebookEmail: getByFacebookEmail,
    getByEmail: getByEmail,
    getByPseudo: getByPseudo
};
import model from './user.model';

export async function create(facebookId, email, pseudo, firstName, lastName) {
    const user = {
        facebookId: facebookId,
        email: email,
        pseudo: pseudo,
        firstName: firstName,
        lastName: lastName
    };

    return await model.create(user);
}

export async function getById(id) {
    return await model.findOne({ _id: id });
}

export async function getByFacebookEmail(facebookId, email) {
    return await model.findOne({ facebookId: facebookId, email: email });
}

export async function getByEmail(email) {
    return await model.findOne({ email: email });
}

export async function getByPseudo(pseudo) {
    return await model.findOne({ pseudo: pseudo });
}
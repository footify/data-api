const _ = require('lodash');
const model = require('./user.model');

function create(facebookId, email, pseudo, firstName, lastName, pictureUrl = "") {
  const user = {
    facebookId: facebookId,
    email: email,
    pseudo: pseudo,
    firstName: firstName,
    lastName: lastName,
    pictureUrl: pictureUrl
  };

  return model.create(user).then((user) => {
    return user;
  });
}

function getById(id) {
  return model.findOne({_id: id}).then((user) => {
    return user;
  });
}

function getByFacebookEmail(facebookId, email) {
  return model.findOne({facebookId: facebookId, email: email}).then((user) => {
    return user;
  });
}

function getByEmail(email) {
  return model.findOne({email: email}).then((user) => {
    return user;
  });
}

function getByPseudo(pseudo) {
  return model.findOne({pseudo: pseudo}).then((user) => {
    return user;
  });
}

function deleteById(id) {
  return model.findOne({_id: id}).remove();
}

function deleteByEmail(email) {
  return model.findOne({email}).remove();
}

function updateById(id, user) {
  return model.findOneAndUpdate({_id: id}, _.omit(user, ['_id']), {new: true});
}

function updateByEmail(email, user) {
  return model.findOneAndUpdate({email}, _.omit(user, ['_id']), {new: true});
}

module.exports = {
  create: create,
  getById: getById,
  getByFacebookEmail: getByFacebookEmail,
  getByEmail: getByEmail,
  getByPseudo: getByPseudo,
  deleteById,
  deleteByEmail,
  updateById,
  updateByEmail
};

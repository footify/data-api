const _ = require('lodash');
const Pub = require('./pub.model');

function create(pub) {
  return Pub.create(pub);
}

function getById(id) {
  return Pub.findOne({ _id: id });
}

function updateById(pubId, pub) {
  return Pub.findOneAndUpdate({ _id: pubId }, _.omit(pub, ['_id']), { new: true });
}

function deleteById(id) {
  return getById(id).remove();
}

function getAdminFromPub(pubId) {
  return getById(pubId).then((pub) => {
    return pub && pub.admins ? pub.admins : [];
  });
}

function addAdminToPub(pubId, userId) {
  return updateById({ _id: pubId }, { $push: { admins: userId } });
}

function removeAdminFromPub(pubId, userId) {
  return updateById({ _id: pubId }, { $pull: { admins: userId } });
}

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
  getAdminFromPub,
  addAdminToPub,
  removeAdminFromPub
}

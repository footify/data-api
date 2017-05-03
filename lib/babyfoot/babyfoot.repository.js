const _ = require('lodash');
const Babyfoots = require('./babyfoot.model');

function create(pub) {
  return Babyfoots.create(pub);
}

function getById(id) {
  return Babyfoots.findOne({ _id: id });
}

function updateById(id, babyfoot) {
  return Babyfoots.findOneAndUpdate({ _id: id }, _.omit(babyfoot, ['_id']), { new: true });
}

function deleteById(id) {
  return Babyfoots.findOne({ _id: id }).remove();
}

function getByPubId(pubId) {
  return Babyfoots.find({ pubId });
}

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
  getByPubId
};

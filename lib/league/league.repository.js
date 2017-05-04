const _ = require('lodash');
const Ligues = require('./league.model.js');

function create(ligue) {
  return Ligues.create(ligue);
}

function getById(ligueId) {
  return Ligues.findOne({ _id: ligueId });
}

function getByPubId(pubId) {
  return Ligues.findOne({ pub: pubId });
}

function updateById(_id, ligue) {
  return Ligues.findOneAndUpdate({ _id }, _.omit(ligue, ['_id']), { new: true });
}

function deleteById(_id) {
  return Ligues.findOne({ _id }).remove();
}

module.exports = {
  create,
  getById,
  getByPubId,
  updateById,
  deleteById
};

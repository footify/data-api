const _ = require('lodash');
const jwt = require('jsonwebtoken');
const Babyfoots = require('./babyfoot.model');

function generateQRCodeUrl({ barId, size }) {
  const bar = barId;
  const size = size || '250x250';

  //TODO: Check if bar and informations are true
  const token = jwt.sign(bar, process.env.SECRET_KEY, {
    noTimestamp: true
  });
  const url = `${conf.qrcode.api.createUrl}?ecc=H&size=${size}&data=${encodeURI(token)}`
  return url;
}

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

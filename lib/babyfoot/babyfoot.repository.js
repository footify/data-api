const _ = require('lodash');
const jwt = require('jsonwebtoken');
const Babyfoots = require('./babyfoot.model');

const qrcode = {
    api: {
      createUrl: "https://api.qrserver.com/v1/create-qr-code/",
      readUrl: "https://api.qrserver.com/v1/read-qr-code/"
    }
};

function generateQRCodeUrl({ barId, size }) {
  const bar = barId;
  const sizeTargeted = size || '250x250';

  //TODO: Check if bar and informations are true
  const url = `${qrcode.api.createUrl}?ecc=H&size=${sizeTargeted}&data=${encodeURI(bar)}`
  return url;
}

function create(babyfoot) {
  const url = generateQRCodeUrl({
    barId: babyfoot.pubId
  });
  babyfoot.qrCodeUrl = url;
  return Babyfoots.create(babyfoot);
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

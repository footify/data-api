const _ = require('lodash');
const Babyfoots = require('./babyfoot.model');

const qrcode = {
    api: {
      createUrl: "https://api.qrserver.com/v1/create-qr-code/",
      readUrl: "https://api.qrserver.com/v1/read-qr-code/"
    }
};

function generateQRCodeUrl({ babyId, size }) {
  const sizeTargeted = size || '250x250';

  return `${qrcode.api.createUrl}?ecc=H&size=${sizeTargeted}&data=${encodeURI(babyId.toString())}`;
}

function create(babyfoot) {
  return Babyfoots.create(babyfoot)
      .then((babyfoot) => {
          babyfoot.qrCodeUrl = generateQRCodeUrl({babyId: babyfoot._id});
          babyfoot.save()
              .then((babyFoot) => {
                  return babyFoot;
              });
      });
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

const _ = require('lodash');
const LigueRankings = require('./ligue_ranking.model');

function create(ligueRanking) {
  return LigueRankings.create(ligueRanking);
}

function updateById(ligueRankingId, ligueRanking) {
  return LigueRankings.updateById({ _id: ligueRankingId }, _.omit(ligueRanking, ['_id']), { new: true });
}

function deleteById(ligueRankingId) {
  return LigueRankings.findOne({ _id: ligueRankingId }).remove();
}

function getById(ligueRankingId) {
  return LigueRankings.findOne({ _id: ligueRankingId });
}

module.exports = {
  create,
  updateById,
  deleteById,
  getById
};

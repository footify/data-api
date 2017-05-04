const _ = require('lodash');
const LeagueRankings = require('./league_ranking.model.js');

function create(leagueRanking) {
  return LeagueRankings.create(leagueRanking);
}

function updateById(leagueRankingId, leagueRanking) {
  return LeagueRankings.updateById({ _id: leagueRankingId }, _.omit(leagueRanking, ['_id']), { new: true });
}

function deleteById(leagueRankingId) {
  return LeagueRankings.findOne({ _id: leagueRankingId }).remove();
}

function getById(leagueRankingId) {
  return LeagueRankings.findOne({ _id: leagueRankingId });
}

function getByTeam(team) {
  return LeagueRankings.findOne({ team: team });
}

module.exports = {
  create,
  updateById,
  deleteById,
  getByTeam,
  getById
};

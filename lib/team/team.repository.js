const _ = require('lodash');
const Teams = require('./team.model');

function create(team) {
  return Teams.create(team);
}

function getById(teamId) {
  return Teams.findOne({ _id: teamId }).populate('players');
}

function addPlayerToTeam(teamId, playerId) {
  return Teams.findOneAndUpdate({ _id: teamId }, { $push: { players: playerId } }, { new: true });
}

function removePlayerToTeam(teamId, playerId) {
  return Teams.findOneAndUpdate({ _id: teamId }, { $pull: { players: playerId } }, { new: true });
}

function updateById(teamId, team) {
  return Teams.findOneAndUpdate({ _id: teamId }, _.omit(team, ['_id']), { new: true }).populate('players');
}

function deleteById(id) {
  return Teams.findOne({ _id: id }).remove();
}

module.exports = {
  create,
  addPlayerToTeam,
  removePlayerToTeam,
  updateById,
  deleteById
};

const _ = require('lodash');
const Teams = require('./team.model');

function create(team) {
  return Teams.create(team);
}

function getById(teamId) {
  return Teams.findOne({ _id: teamId }).populate('players');
}

function getByPlayers(user1, user2) {
  return Teams.find({ $or: [ { player1: user1, player2: user2 }, { player1: user2, player2: user1 } ]})
              .populate('player1 player2');
}

function getByPlayer(user1) {
  return Team.find({ $or: [ { player1: user1 }, { player2: user1 }]})
             .populate('player1 player2');
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
  getById,
  getByPlayers,
  getByPlayer,
  addPlayerToTeam,
  removePlayerToTeam,
  updateById,
  deleteById
};

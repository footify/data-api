const _ = require('lodash');
const Games = require('./game.model');

function create(game) {
  game.start_date = new Date();
  return Games.create(game);
}

function getById(gameId) {
  return Games.findOne({ _id: gameId }).populate('team team.player1 team.player2');
}

function getAllGamesByBabyfootId(babyfootId) {
  return Games.find({ babyfootId }).populate('teams team.player1 team.player2')
}

module.exports = {
  create,
  getById,
  getAllGamesByBabyfootId
};

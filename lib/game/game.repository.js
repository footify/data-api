const _ = require('lodash');
const Games = require('./game.model');

function create(game) {
  game.start_date = new Date();
  return Games.create(game);
}

function addScoresToGame(gameId, scores) {
  return Games.findOne({ _id: gameId }).then((game) => {
    const winner = scores[0] > scores[1] ? game.teams[0] : game.teams[1];
    const end_date = new Date();
    return Games.findOneAndUpdate({ _id: gameId }, { scores, winner, end_date })
  });
}

module.exports = {
  create,
  addScoresToGame
};

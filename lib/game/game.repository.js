const _ = require('lodash');
const Games = require('./game.model');
const Friends = require('../friendList/friendList.repository');

function create(game) {
  game.start_date = new Date();
  return Games.create(game);
}

function getById(gameId) {
  return Games.findOne({ _id: gameId }).populate('team team.player1 team.player2');
}

function getAllGamesByUserId(userId) {
  return Friends.getFriendList(userId).then((friendList) => {
    const friendIds = _.map(friendList.accepted, friend => friend._id);
    const ids = _.concat(friendIds, userId);
    return Games.find({}).populate('teams team.player1 team.player2')
          .then(games => {
            return _.filter(games, game => {
              return _.includes(ids, games.teams[0].player1)
                    || _.includes(ids, games.teams[0].player2)
                    || _.includes(ids, games.teams[1].player1)
                    || _.includes(ids, games.teams[1].player2)
            });
          });
  });
}

function getAllGamesByPubId(pubId) {
  return Games.find({}).populate('teams team.player1 team.player2 babyfoot babyfoot.pub').then((games) => {
    return _.filter(games, game => game.babyfoot.pub._id === pubId);
  });
}

function getAllGamesByBabyfootId(babyfootId) {
  return Games.find({ babyfootId }).populate('teams team.player1 team.player2');
}

module.exports = {
  create,
  getById,
  getAllGamesByBabyfootId,
  getAllGamesByUserId,
  getAllGamesByPubId
};

const _ = require('lodash');
const Games = require('./game.model');
const Baby = require('../babyfoot/babyfoot.repository');
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
    return Games.find({}).populate('teams team.player1 team.player2').sort({ start_date: -1 })
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
  Babyfoots.getByPubId(pubId).then(babyfoots => {
    const ids = _.map(babyfoots, babyfoot => babyfoot._id);
    return Games.find({ babyfoot: { $in: ids } })
                .populate('teams team.player1 team.player2 babyfoot babyfoot.pub')
                .sort({ start_date: -1 });
  });
}

function getAllGamesByBabyfootId(babyfootId) {
  return Games.find({ babyfoot: babyfootId })
              .populate('teams team.player1 team.player2')
              .sort('-start_date');
}

module.exports = {
  create,
  getById,
  getAllGamesByBabyfootId,
  getAllGamesByUserId,
  getAllGamesByPubId
};

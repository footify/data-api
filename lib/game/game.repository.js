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
    return Baby.getByPubId(pubId)
        .then((babyFoots) => {
            let babyIds = [];
            for (let babyFoot of babyFoots) {
                babyIds.push(babyFoot._id);
            }
            return Games.find({ babyfoot: { $in: babyIds }}).populate('teams teams.player1 teams.player2').sort('-start_date');
        });
}

function getAllGamesByBabyfootId(babyfootId) {
  return Games.find({ babyfoot: babyfootId }).populate('teams teams.player1 teams.player2').sort('-start_date');
}

module.exports = {
  create,
  getById,
  getAllGamesByBabyfootId,
  getAllGamesByUserId,
  getAllGamesByPubId
};

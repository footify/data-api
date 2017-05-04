const _ = require('lodash');
const Games = require('./game.model');
const Baby = require('../babyfoot/babyfoot.repository');
const Friends = require('../friendList/friendList.repository');
const Teams = require('../team/team.repository');

function create(game) {
    game.start_date = new Date();
    return Games.create(game);
}

function getById(gameId) {
    return Games.findOne({_id: gameId}).populate({
        path: 'teams',
        populate: {
            path: 'player1 player2'
        }
    });
}

function getAllGamesByUserId(userId) {
    return Friends.getFriendList(userId).then((friendList) => {
        const teamsPromises = _.map(friendList.accepted, friend => () => Friends.getByPlayer(friend._id));
        console.log(teamsPromises);
        return Promise.all(teamsPromises).then(teams => _.chain(teams).flatten().map('_id').uniq().value())
            .then((teamIds) => {
                console.log(teamIds);
                return Games.find({
                    teams: {
                        $in: teamIds
                    }
                }).populate({
                    path: 'teams',
                    populate: {
                        path: 'player1 player2'
                    }
                }).sort({start_date: -1});
            });
    });
}

function getAllGamesByPubId(pubId) {
    return Baby.getByPubId(pubId).then(babyfoots => {
        const ids = _.map(babyfoots, babyfoot => babyfoot._id);
        return Games.find({
            babyfoot: {
                $in: ids
            }
        }).populate({
            path: 'teams',
            populate: {
                path: 'player1 player2'
            }
        }).sort({start_date: -1});
    });
}

function getAllGamesByBabyfootId(babyfootId) {
    return Games.find({babyfoot: babyfootId}).populate({
        path: 'teams',
        populate: {
            path: 'player1 player2'
        }
    }).sort('-start_date');
}

module.exports = {
    create,
    getById,
    getAllGamesByBabyfootId,
    getAllGamesByUserId,
    getAllGamesByPubId
};

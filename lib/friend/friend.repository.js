const Friend = require('./friend.model');
const Users = require('../user/user.repository');
const _ = require('lodash');

function create(from, userId) {
  return Friend.create({
    user: userId,
    owner: from,
    accepted: false
  });
}

function updateByUserIdAndOwner(userId, owner) {
  return Friend.findOneAndUpdate({ user: userId, owner }, { accepted: true }, { new: true });
}

function sendInvitation(from, to) {
  return create(from, to);
}

function acceptInvitation(userId, owner) {
  return updateByUserIdAndOwner(userId, owner);
}

function denyFriend(userId, owner) {
  return Friend.findOne({ user: userId, owner }).remove();
}

function getMyFriends(owner) {
  const friendList = {
    friends: [],
    waiting_approval: [],
    waiting_answer: []
  };
  return Friend.find({ owner }).populate('user owner').then((users) => {
    return users.map((user) => {
      user.accepted ?
        friendList.friends.push(user) :
        friendList.waiting_approval.push(user)
    });
  }).then(() => {
    return Friend.find({ user: owner, accepted: false }).populate('user owner');
  }).then((users) => {
    users.map((user) => {
      friendList.waiting_answer.push(user);
    });
    return friendList;
  });
}

module.exports = {
  sendInvitation,
  acceptInvitation,
  getMyFriends,
  denyFriend
}

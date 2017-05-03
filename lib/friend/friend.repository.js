const Friends = require('./friend.model');
const Users = require('../user/user.repository');

function create(from, userId) {
  return Friends.create({
    user: userId,
    owner: from,
    accepted: false
  });
}

function updateByUserIdAndOwner(userId, owner) {
  return Friends.findOneAndUpdate({ user: userId, owner }, { accepted: true }, { new: true });
}

function sendInvitation(from, to) {
  return create(from, to);
}

function acceptInvitation(userId, owner) {
  return updateByUserIdAndOwner(userId, owner);
}

function getFriends(owner) {
  return Friends.find({ owner }).then((users) => {
    const friendList = {
      friends: [],
      waiting_approval: []
    };
    users.map((user) => {
      user.accepted ?
        friendList.friends.push(user) :
        friendList.waiting_approval.push(user)
    });
    return friendList;
  });
}

module.exports = {
  sendInvitation,
  acceptInvitation,
  getFriends
}

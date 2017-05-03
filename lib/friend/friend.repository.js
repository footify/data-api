const Friend = require('./friend.model');
const Users = require('../user/user.repository');

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
  return Friend.find({ owner }).then((users) => {
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
  getMyFriends,
  denyFriend
}

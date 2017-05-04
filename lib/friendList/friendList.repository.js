const friendListModel = require('./friendList.model');


function create(userId) {
    return friendListModel.create({user: userId, waitingAnswer: [], waitingApproval: [], accepted: []});
}

function getFriendList(userId) {
    return friendListModel.findOne({ user: userId }).populate('waitingAnswer waitingApproval accepted');
}

function sendInvitation(senderId, userId) {
    return friendListModel.findOne({ user: senderId })
        .then((senderFriendList) => {
            if (!senderFriendList) {
                throw new Error('No sender friend list');
            }
            senderFriendList.waitingAnswer.push(userId);
            return friendListModel.findOne({ user: userId })
                .then((userFriendList) => {
                    if (!userFriendList) {
                        throw new Error('No user friend list');
                    }
                    userFriendList.waitingApproval.push(senderId);
                    return senderFriendList.save()
                        .then(() => {
                            return userFriendList.save()
                                .then(() => {
                                    return true;
                                });
                        })
                });
        })
}

function acceptInvitation(userId, friendId) {
    return friendListModel.findOne({ user: userId })
        .then((userFriendList) => {
            if (!userFriendList) {
                throw new Error('No friend list');
            }
            return friendListModel.findOne({ user: friendId })
                .then((friendFriendList) => {
                    if (!friendFriendList) {
                        throw new Error('No friend list');
                    }
                    userFriendList.waitingApproval.pull(friendId);
                    userFriendList.accepted.push(friendId);
                    return userFriendList.save()
                        .then(() => {
                            friendFriendList.waitingAnswer.pull(userId);
                            friendFriendList.accepted.push(userId);
                            return friendFriendList.save()
                                .then(() => {
                                    return true;
                                });
                        });
                });
        });
}

function denyInvitation(userId, friendId) {
    return friendListModel.findOne({ user: userId })
        .then((userFriendList) => {
            if (!userFriendList) {
                throw new Error('No friend list');
            }
            return friendListModel.findOne({ user: friendId })
                .then((friendFriendList) => {
                    if (!friendFriendList) {
                        throw new Error('No friend list');
                    }
                    userFriendList.waitingApproval.pull(friendId);
                    return userFriendList.save()
                        .then(() => {
                            friendFriendList.waitingAnswer.pull(userId);
                            return friendFriendList.save()
                                .then(() => {
                                    return true;
                                });
                        });
                });
        });
}

module.exports = {
    create: create,
    getFriendList: getFriendList,
    sendInvitation: sendInvitation,
    acceptInvitation: acceptInvitation,
    denyInvitation: denyInvitation
};
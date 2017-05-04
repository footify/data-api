// const mongoose = require('mongoose');
// const Friends = require('../../lib/friend/friend.repository');
// const Users = require('../../lib/user/user.repository');
// const User = require('../../lib/user/user.model');
//
// let userTest1 = new User({
//   facebookId: "123456789ABCDEFX",
//   email: "teste@gmail.com",
//   pseudo: "test-t",
//   firstName: "Mongo",
//   lastName: "Test",
//   pictureUrl: "www.google.com/img"
// });
//
// let userTest2 = new User({
//   facebookId: "123456789ABCDEFY",
//   email: "testee@gmail.com",
//   pseudo: "test-t",
//   firstName: "Mongo",
//   lastName: "Test",
//   pictureUrl: "www.google.com/img"
// });
//
// beforeAll(() => {
//   mongoose.connect("mongodb://footifydb:27017");
//   return Users.create(userTest1)
//     .then((user) => {
//       userTest1 = user;
//       return Users.create(userTest2);
//     }).then((user) => userTest2 = user);
// });
//
// afterAll(() => {
//   return Users.deleteByEmail(userTest1.email).then(() => {
//     return Users.deleteByEmail(userTest2.email);
//   }).then(() => {
//     return mongoose.connection.close();
//   });
// });
//
// describe("Ensuring that Friend model, schema and db calls are working", () => {
//
//   it('should ensure that friendModel exists', () => {
//     expect(Friends).toBeDefined();
//   });
//
//   it('should create an invitation', () => {
//     return Friends.sendInvitation(userTest1._id, userTest2._id).then((friend) => {
//       expect(friend.user).toBe(userTest2._id);
//       expect(friend.owner).toBe(userTest1._id);
//       expect(friend.accepted).toBe(false);
//     });
//   });
//
//   it('should accept an invitation', () => {
//     return Friends.acceptInvitation(userTest2._id, userTest1._id).then((friend) => {
//       expect(friend.accepted).toBe(true);
//     });
//   });
//
//   it('should return a friend list', () => {
//     return Friends.getMyFriends(userTest1._id).then((friendList) => {
//       expect(friendList.friends.length).toBe(1);
//     });
//   });
//
//   it('should deny an invitation', () => {
//     return Friends.denyFriend(userTest2._id, userTest1._id).then((res) => {
//       expect(res.result.ok).toBe(1);
//     });
//   });
//
// });

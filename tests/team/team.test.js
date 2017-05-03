// const mongoose = require('mongoose');
// const _ = require('lodash');
// const Teams = require('../../lib/team/team.repository');
// const Users = require('../../lib/user/user.repository');
//
// let teamTest = {
//       players: [],
//       name: "Terminators"
// };
//
// let userTest = {
//   facebookId: "123456789ABCDEFEEEEE",
//   email: "test@gmail.com",
//   pseudo: "test-t",
//   firstName: "Mongo",
//   lastName: "Test",
//   pictureUrl: "www.google.com/img"
// };
//
// beforeAll(() => {
//   mongoose.connect("mongodb://footifydb:27017");
//   return Users.create(userTest).then((user) => {
//     userTest = user;
//     teamTest.players.push(user._id);
//   });
// });
//
// afterAll(() => {
//   Users.deleteById(userTest._id);
//   mongoose.connection.close();
// });
//
// describe("Ensuring that Team model, schema and db calls are working", () => {
//
//   it('should ensure that Team model exists', () => {
//     expect(Teams).toBeDefined();
//   });
//
//   it('should create a team', () => {
//     return Teams.create(teamTest).then((team) => {
//       expect(team.manufacturer).toBe(teamTest.manufacturer);
//       expect(team.qrCodeUrl).toBe(teamTest.qrCodeUrl);
//       teamTest = team;
//     });
//   });
//
//   it('should remove a player from the team', () => {
//     return Teams.removePlayerToTeam(teamTest._id, userTest._id).then((team) => {
//       expect(team.players.length).toBe(0);
//     });
//   });
//
//   it('should change the name of the team', () => {
//     return Teams.updateById(teamTest._id, { name: "Loosers" }).then((team) => {
//       expect(team.name).toBe("Loosers");
//     });
//   });
//
//   it('should remove a team', () => {
//     return Teams.deleteById(teamTest._id).then((res) => {
//       expect(res.result.ok).toBe(1);
//     });
//   });
//
// });

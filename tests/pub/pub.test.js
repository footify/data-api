// const mongoose = require('mongoose');
// const _ = require('lodash');
// const Pubs = require('../../lib/pub/pub.repository');
//
// let pubTest = {
//       name: "Mauri7",
//       street_number: "22",
//       street_name: "Rue des Bitoufs",
//       zip_code: "75010",
//       city: "Paris"
// };
//
// beforeAll(() => {
//   mongoose.connect("mongodb://footifydb:27017");
// });
//
// afterAll(() => {
//   mongoose.connection.close();
// });
//
// describe("Ensuring that Pub model, schema and db calls are working", () => {
//
//   it('should ensure that PubModel exists', () => {
//     expect(Pubs).toBeDefined();
//   });
//
//   it('should create a pub', () => {
//     return Pubs.create(pubTest).then((pub) => {
//       pubTest = pub;
//       expect(pub.name).toBe("Mauri7");
//       expect(pub.street_number).toBe("22");
//       expect(pub.street_name).toBe("Rue des Bitoufs");
//       expect(pub.zip_code).toBe("75010");
//       expect(pub.city).toBe("Paris");
//     });
//   });
//
//   it('should retrieve a pub', () => {
//     return Pubs.getById(pubTest._id).then((pub) => {
//       expect(pub.name).toBe(pubTest.name);
//       expect(pub.street_number).toBe(pubTest.street_number);
//       expect(pub.street_name).toBe(pubTest.street_name);
//       expect(pub.zip_code).toBe(pubTest.zip_code);
//       expect(pub.city).toBe(pubTest.city);
//     });
//   });
//
//   it('should update a pub', () => {
//     return Pubs.updateById(pubTest._id, { name: "Objectif Lune" }).then((pub) => {
//       expect(pub.name).toBe("Objectif Lune");
//     });
//   });
//
//   it('should add an admin', () => {
//     return Pubs.addAdminToPub(pubTest._id, "123456789").then((pub) => {
//       expect(_.includes(pub.admins, "123456789")).toBeTruthy();
//     });
//   });
//
//   it('should retrieve admins', () => {
//     return Pubs.getAdminFromPub(pubTest._id).then((admins) => {
//       expect(_.includes(admins, "123456789")).toBeTruthy();
//     });
//   });
//
//   it('should delete an admin', () => {
//     return Pubs.removeAdminFromPub(pubTest._id, "123456789").then((pub) => {
//       expect(_.includes(pub.admins, "123456789")).toBeFalsy();
//       expect(pub.admins.length).toBe(0);
//     });
//   });
//
//   it('should remove a pub', () => {
//     return Pubs.deleteById(pubTest._id).then((res) => {
//       expect(res.result.ok).toBe(1);
//     });
//   });
//
// });

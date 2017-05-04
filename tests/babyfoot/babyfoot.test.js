// const mongoose = require('mongoose');
// const _ = require('lodash');
// const Babyfoots = require('../../lib/babyfoot/babyfoot.repository');
// const Pubs = require('../../lib/pub/pub.repository');
//
// let babyfootTest = {
//       manufacturer: "Footify",
//       qrCodeUrl: "www.google.com"
// };
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
//   return Pubs.create(pubTest).then((pub) => {
//     pubTest = pub;
//     babyfootTest.pubId = pub._id;
//   });
// });
//
// afterAll(() => {
//   Pubs.deleteById(pubTest);
//   mongoose.connection.close();
// });
//
// describe("Ensuring that Babyfoot model, schema and db calls are working", () => {
//
//   it('should ensure that BabyfootModel exists', () => {
//     expect(Babyfoots).toBeDefined();
//   });
//
//   it('should create a babyfoot', () => {
//     return Babyfoots.create(babyfootTest).then((babyfoot) => {
//       babyfootTest = babyfoot;
//       expect(babyfoot.manufacturer).toBe(babyfootTest.manufacturer);
//       expect(babyfoot.qrCodeUrl).toBe(babyfootTest.qrCodeUrl);
//     });
//   });
//
//   it('should retrieve a babyfoot', () => {
//     return Babyfoots.getById(babyfootTest._id).then((babyfoot) => {
//       expect(babyfoot.manufacturer).toBe(babyfootTest.manufacturer);
//       expect(babyfoot.qrCodeUrl).toBe(babyfootTest.qrCodeUrl);
//     });
//   });
//
//   it('should retrieve a babyfoot', () => {
//     return Babyfoots.updateById(babyfootTest._id, { manufacturer: "Footify Bis" }).then((babyfoot) => {
//       expect(babyfoot.manufacturer).toBe("Footify Bis");
//     });
//   });
//
//   it('should retrieve all babyfoots by pub', () => {
//     return Babyfoots.getByPubId(pubTest._id).then((babyfoots) => {
//       expect(babyfoots.length).toBe(1);
//     });
//   });
//
//   it('should remove a babyfoot', () => {
//     return Babyfoots.deleteById(babyfootTest._id).then((res) => {
//       expect(res.result.ok).toBe(1);
//     });
//   });
//
// });

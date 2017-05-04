const mongoose = require('mongoose');
const User = require('../../lib/user/user.model');
const Users = require('../../lib/user/user.repository');

beforeAll(() => {
  return mongoose.connect("mongodb://footifydb:27017");
});

afterAll(() => {
  return Users.deleteByEmail(userTest.email).then((res) => {
    expect(res.result.ok).toBe(1);
    return mongoose.connection.close();
  });
});

const userTest = new User({
  facebookId: "1",
  email: "test.user@gmail.com",
  pseudo: "test-user",
  firstName: "User",
  lastName: "Test",
  pictureUrl: "www.google.com/img"
});

describe("Ensuring that User model, schema and db calls are working", () => {

  it('should ensure that userModel exists', () => {
    expect(User).toBeDefined();
  });

  it('should ensure that Users can be created', () => {
    return Users.create(userTest).then((user) => {
      expect(user.facebookId).toBe(userTest.facebookId);
      expect(user.email).toBe(userTest.email);
      expect(user.pseudo).toBe(userTest.pseudo);
      expect(user.firstName).toBe(userTest.firstName);
      expect(user.lastName).toBe(userTest.lastName);
    });
  });

  it('should ensure that Users can get retrieved by email', () => {
    return Users.getByEmail(userTest.email).then((user) => {
      expect(user.email).toBe(userTest.email);
    });
  });

  it('should ensure that Users can get retrieved by pseudo', () => {
    return Users.getByPseudo(userTest.pseudo).then((user) => {
      expect(user.pseudo).toBe(userTest.pseudo);
    });
  });

  it('should ensure that Users can get retrieved by faceBook and Email', () => {
    return Users.getByFacebookEmail(userTest.facebookId, userTest.email).then((user) => {
      expect(user.email).toBe(userTest.email);
      expect(user.facebookId).toBe(userTest.facebookId);
    });
  });

  it('should ensure that Users can get updated by email', () => {
    return Users.updateByEmail(userTest.email, {firstName: "Tutu"}).then((user) => {
      expect(user.email).toBe(userTest.email);
      expect(user.firstName).toBe("Tutu");
    });
  });
});

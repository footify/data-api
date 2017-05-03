const mongoose = require('mongoose');
const User = require('../../lib/user/user.model');
const Users = require('../../lib/user/user.repository');

beforeAll(() => {
  mongoose.connect("mongodb://footifydb:27017");
});

afterAll(() => {
  mongoose.connection.close();
});

const userTest = new User({
  facebookId: "123456789ABCDEF",
  email: "test@gmail.com",
  pseudo: "test-t",
  firstName: "Mongo",
  lastName: "Test",
  pictureUrl: "www.google.com/img"
});

const userTestValidator = (user) => {
  expect(user.facebookId).toBe(userTest.facebookId);
  expect(user.email).toBe(userTest.email);
  expect(user.pseudo).toBe(userTest.pseudo);
  expect(user.firstName).toBe(userTest.firstName);
  expect(user.lastName).toBe(userTest.lastName);
  //expect(user.pictureUrl).toBe("www.google.com/img");
};

describe("Ensuring that User model, schema and db calls are working", () => {

  it('should ensure that userModel exists', () => {
    expect(User).toBeDefined();
  });

  it('should ensure that userModel schema is working', () => {
    const result = userTest.validateSync();
    // expect(!result.errors['facebookId']).ToBeTruthy();
    // expect(!result.errors['email']).ToBeTruthy();
    // expect(!result.errors['pseudo']).ToBeTruthy();
    // expect(!result.errors['firstName']).ToBeTruthy();
    // expect(!result.errors['lastName']).ToBeTruthy();
    // expect(!result.errors['pictureUrl']).ToBeTruthy();
    // expect(!result.errors['facebookId']).ToBeTruthy();
  });

  it('should ensure that Users can be created', () => {
    return Users.create(userTest.facebookId, userTest.email, userTest.pseudo, userTest.firstName, userTest.lastName, userTest.pictureUrl).then((user) => {
      userTestValidator(user);
    });
  });

  it('should ensure that Users can get retrieved by email', () => {
    return Users.getByEmail("test@gmail.com").then((user) => {
      userTestValidator(user);
    });
  });

  it('should ensure that Users can get retrieved by pseudo', () => {
    return Users.getByPseudo("test-t").then((user) => {
      userTestValidator(user);
    });
  });

  it('should ensure that Users can get retrieved by faceBook and Email', () => {
    return Users.getByFacebookEmail("123456789ABCDEF", "test@gmail.com").then((user) => {
      userTestValidator(user);
    });
  });

  it('should ensure that Users can get updated by email', () => {
    return Users.updateByEmail("test@gmail.com", {firstName: "Tutu"}).then((user) => {
       expect(user.firstName).toBe("Tutu");
    });
  });

  it('should ensure that Users can be removed by email', () => {
    return Users.deleteByEmail("test@gmail.com").then((res) => {
      expect(res.result.ok).toBe(1);
    });
  });
});

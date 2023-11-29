const faker = require('faker');

const generateRandomRegistrationData = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  return { firstName, lastName, email, password };
};

export { generateRandomRegistrationData };

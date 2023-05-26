const { faker } = require('@faker-js/faker');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for( let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
      });
    }
  }

  create() {

  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = UsersService;

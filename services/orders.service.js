const { faker } = require('@faker-js/faker');

class OrdersService {

  constructor() {
    this.orders = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for( let i = 0; i < limit; i++) {
      this.orders.push({
        id: faker.string.uuid(),
        amount: parseInt(faker.finance.amount(), 10),
      });
    }
  }

  create() {

  }

  find() {
    return this.orders;
  }

  findOne(id) {
    return this.orders.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = OrdersService;

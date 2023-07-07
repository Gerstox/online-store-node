const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class OrderService {

  constructor() {
    this.orders = [];
    // this.generate();
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

  async create(data) {
    const customer = await models.Customer.findOne({
      where: {
        '$user.id$': data.userId
      },
      include: ['user']
    });
    if (!customer) {
      throw boom.notFound('Customer not found.');
    }
    const newOrder = await models.Order.create({
      customerId: customer.id
    });
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        '$customer.user.id$': userId
      },
      include: [
        {
          association: 'customer',
          include: ['user']
        }
      ]
    });
    return orders;
  }

  async find() {
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if (!order) {
      throw boom.notFound('Order not found');
    }
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id);
    const response = await order.update(changes);
    return response;
  }

  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return { id }
  }

}

module.exports = OrderService;

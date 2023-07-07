const express = require('express');
const passport = require('passport');

const OrderService = require('../services/order.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createOrderSchema, getOrderSchema, addOrderItemSchema } = require('../schemas/order.schema');

const router = express.Router();
const service = new OrderService();

router.get('/', async (request, response) => {
  const orders = await service.find();
  response.json(orders);
});

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (request, response, next) => {
  try {
    const { id } = request.params;
    const order = await service.findOne(id);
    response.json(order);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  //validatorHandler(createOrderSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = {
        userId: request.user.sub
      };
      const newOrder = await service.create(body);
      response.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
});

router.post('/add-item',
  validatorHandler(addOrderItemSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newItem = await service.addItem(body);
      response.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
});

module.exports = router;

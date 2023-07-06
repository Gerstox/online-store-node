const express = require('express');

const productsRouter = require('./products.router');
const orderRouter = require('./order.router');
const userRouter = require('./user.router');
const customerRouter = require('./customer.router');
const categoryRouter = require('./category.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/orders', orderRouter);
  router.use('/users', userRouter);
  router.use('/customers', customerRouter);
  router.use('/categories', categoryRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;

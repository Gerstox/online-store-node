const express = require('express');

const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router');
const userRouter = require('./user.router');
const customerRouter = require('./customer.router');
const categoryRouter = require('./category.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/orders', ordersRouter);
  router.use('/users', userRouter);
  router.use('/customers', customerRouter);
  router.use('/categories', categoryRouter);
}

module.exports = routerApi;

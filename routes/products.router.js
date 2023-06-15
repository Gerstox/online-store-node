const express = require('express');

const ProductService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema');

const router = express.Router();
const service = new ProductService();

router.get('/', async (request, response) => {
  const products = await service.find();
  response.json(products);
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newProduct = await service.create(body);
      response.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (request, response, next) => {
  try {
    const { id } = request.params;
    const body = request.body;
    const product = await service.update(id, body);
    response.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const result = await service.delete(id);
  response.json(result);
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (request, response, next) => {
  try {
    const { id } = request.params;
    const product = await service.findOne(id);
    response.json(product);
  } catch (error) {
    next(error);
  }

});

module.exports = router;

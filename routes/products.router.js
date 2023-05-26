const express = require('express');

const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (request, response) => {
  const products = await service.find();
  response.json(products);
});

router.post('/', async (request, response) => {
  const body = request.body;
  const newProduct = await service.create(body);
  response.status(201).json(newProduct);
});

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const body = request.body;
    const product = await service.update(id, body);
    response.json(product);
  } catch (error) {
    response.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const result = await service.delete(id);
  response.json(result);
});

router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const product = await service.findOne(id);
  response.json(product);
});

module.exports = router;

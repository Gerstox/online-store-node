const express = require('express');

const UsersService = require('../services/users.service');
const validatorHandler = require('../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

router.get('/', async (request, response, next) => {
  try {
    const users = await service.find();
    response.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const user = await service.findOne(id);
      response.json(user);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newUser = await service.create(body);
      response.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const user = await service.update(id, body);
      response.json(user);
    } catch (error) {
      next(error);
    }
});

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      await service.delete(id);
      response.status(201).json({id});
    } catch (error) {
      next(error);
    }
});



module.exports = router;

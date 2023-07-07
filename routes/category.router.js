const express = require('express');
const passport = require('passport');

const CategoryService = require('../services/category.service');
const validatorHandler = require('../middlewares/validator.handler');
const { checkRoles } = require('../middlewares/auth.handler');
const { updateCategorySchema, createCategorySchema, getCategorySchema } = require('../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

router.get('/',
passport.authenticate('jwt', { session: false }),
checkRoles('admin', 'customer', 'seller'),
async (request, response, next) => {
  try {
    const categories = await service.find();
    response.json(categories);
  } catch (error) {
    next(error);
  }
  }
);

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'customer'),
  validatorHandler(getCategorySchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const category = await service.findOne(id);
      response.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(createCategorySchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newCategory = await service.create(body);
      response.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const category = await service.update(id, body);
      response.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getCategorySchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      await service.delete(id);
      response.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

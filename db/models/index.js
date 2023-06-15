const { UserSchema, User } = require('./user.model');
const { CustomerSchema, Customer } = require('./customer.model');
const { ProductSchema, Product } = require('./product.model');
const { CategorySchema, Category } = require('./category.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
}

module.exports = setupModels;

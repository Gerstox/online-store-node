const jwt = require('jsonwebtoken');
const { config } = require('./config/config');

const payload = {
  sub: 1,
  role: 'customer'
};

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, config.jwtSecret);

console.log(token);

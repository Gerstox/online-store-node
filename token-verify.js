const jwt = require('jsonwebtoken');
const { config } = require('./config/config');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4ODQ4ODI2MX0.0wLlnhMvHguVi0l-VY2gta0N4CVbsvZyDhaLeJVQqVo';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, config.jwtSecret);

console.log(payload);

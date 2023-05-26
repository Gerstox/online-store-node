const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  const { limit, offset } = request.query;
  if (limit && offset) {
    response.json({
      limit,
      offset
    });
  }
  response.send('No hay parámetros');
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  response.json({
    id,
    name: 'User ' + id,
  });
});

module.exports = router;

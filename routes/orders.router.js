const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.json([
    {
      name: 'Order 1',
    },
    {
      name: 'Order 2',
    }
  ]);
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  response.json({
    id,
    name: 'Order ' + id,
  });
});

module.exports = router;

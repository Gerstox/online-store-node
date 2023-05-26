const express = require('express');

const router = express.Router();

router.get('/categories', (request, response) => {
  response.json([
    {
      name: 'Category 1',
    },
    {
      name: 'Category 2',
    }
  ]);
});

router.get('/categories/:id', (request, response) => {
  const { id } = request.params;
  response.json({
    id,
    name: 'Category ' + id,
  });
});

module.exports = router;

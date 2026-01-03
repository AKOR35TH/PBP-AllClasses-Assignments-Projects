var express = require('express');
var router = express.Router();

router.get('/profile', function(req, res, next) {
  res.json(
    { message: 'Hello World',
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com'
    }
  );
});

module.exports = router;

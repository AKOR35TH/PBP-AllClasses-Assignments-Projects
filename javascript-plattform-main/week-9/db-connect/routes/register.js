var express = require('express');
var router = express.Router();
const dbService = require('../dbservices/sqlite');

/* GET registration form. */
router.get('/', function(req, res, next) {
  res.render('register', {});
});

/* POST registration form. */
router.post('/', async function(req, res, next) {
  try {
    const { name, username, email, password } = req.body;
    
    // Basic validation
    if (!name || !username || !email || !password) {
      return res.render('register', {
        error: 'All fields are required',
        name: name || '',
        username: username || '',
        email: email || ''
      });
    }
    
    // Insert user into database
    await dbService.insertUser({ name, username, email, password });
    
    res.render('register', {
      success: 'User registered successfully!',
      name: '',
      username: '',
      email: ''
    });
  } catch (err) {
    console.error('Registration error:', err);
    
    // Handle unique constraint violations
    let errorMessage = 'An error occurred during registration';
    if (err.message.includes('UNIQUE constraint failed')) {
      if (err.message.includes('username')) {
        errorMessage = 'Username already exists';
      } else if (err.message.includes('email')) {
        errorMessage = 'Email already exists';
      }
    }
    
    res.render('register', {
      error: errorMessage,
      name: req.body.name || '',
      username: req.body.username || '',
      email: req.body.email || ''
    });
  }
});

module.exports = router;

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// 1. Database Connection and Setup (Initialise or open the database file)
const db = new sqlite3.Database('./my_traditional_data.sqlite');

// Create table if it doesn't exist
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE)");
});

// 2. Middleware to parse incoming HTML form data
app.use(express.urlencoded({ extended: true }));

// 3. Define the POST route to receive form data
app.post('/api/submit-user', (req, res) => {
  // Extract data from the form submission (req.body)
  const { name, email } = req.body;

  // SQL Query: Use '?' for parameter binding to prevent SQL Injection
  const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;

  // 4. Execute the raw SQL query
  db.run(sql, [name, email], function(err) {
    if (err) {
      console.error('Error inserting data:', err.message);
      // Check for common errors like unique constraint violation
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).send('Error: Email already exists.');
      }
      return res.status(500).send('Error processing request.');
    }
    // Success response
    console.log(`A new user was inserted with ID: ${this.lastID}`);
    res.send('✅ User data successfully saved (Traditional Method)!');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create connection
const db = mysql.createConnection({
  host: 'database',   // service name from docker-compose
  user: 'root',
  password: 'root',
  database: 'testdb'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Route
app.get('/', (req, res) => {
  db.query("SELECT 1", (err, result) => {
    if (err) {
      return res.send("Database error");
    }
    res.send("Hello from Backend + Database Connected ✅");
  });
});

// Start server
app.listen(5000, '0.0.0.0', () => {
  console.log("Backend running on port 5000");
});
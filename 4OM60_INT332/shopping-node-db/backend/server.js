import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST || "db";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "root";
const DB_NAME = process.env.DB_NAME || "shopdb";

// Create MySQL connection (with retry logic)
let connection;

const connectDB = async () => {
  try {
    connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });
    console.log(" Connected to MySQL");

    // Create table if not exists
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        price FLOAT
      )
    `);

    console.log(" Table ready");
  } catch (err) {
    console.log(" DB connection failed. Retrying...");
    setTimeout(connectDB, 5000);
  }
};

connectDB();


//  Route 1: Home
app.get("/", (req, res) => {
  res.send("🛒 Online Shopping Backend Running");
});


// //  Route 2: Add Product
// app.post("/products", async (req, res) => {
//   const { name, price } = req.body;

//   try {
//     const [result] = await connection.execute(
//       "INSERT INTO products (name, price) VALUES (?, ?)",
//       [name, price]
//     );
//     res.json({ message: "Product added", id: result.insertId });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// //  Route 3: Get Products
// app.get("/products", async (req, res) => {
//   try {
//     const [rows] = await connection.execute("SELECT * FROM products");
//     res.json(rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// Start server
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
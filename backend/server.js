const express = require("express");
const cors = require("cors");
const port = 3000;
const pool = require('./config/db');
const createUserTable = require("./config/createUserTable");

const app = express();

app.use(express.json());
app.use(cors());

// Connect to DB and create users table
pool.connect()
  .then(async () => {
    console.log("✔ PostgreSQL connected successfully");
    await createUserTable();
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err.message);
  });

// Test GET route
app.get('/', (req, res) => {
  res.send("Success sent by GET");
});

// POST route to add a new user
app.post('/users', async (req, res) => {
  const { name, age, email, password, gender, city, country, mobile } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required" });
  }

  try {
    const insertQuery = `
      INSERT INTO users (name, age, email, password, gender, city, country, mobile)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;

    const result = await pool.query(insertQuery, [name, age, email, password, gender, city, country, mobile]);
    res.status(201).json({ message: "User added successfully", user: result.rows[0] });

  } catch (error) {
    console.error("❌ Error inserting user:", error.message);
    res.status(500).json({ error: "Failed to add user" });
  }
});

// POST /login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
    const result = await pool.query(query, [email, password]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user: result.rows[0] });
  } catch (error) {
    console.error("❌ Login error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(port, () => {
  console.log(`Running server successfully at http://localhost:${port}`);
});

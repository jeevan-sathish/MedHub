const pool = require("./db");

async function createUserTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      age INT,
      email VARCHAR(150) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      gender VARCHAR(20),
      city VARCHAR(100),
      country VARCHAR(100),
      mobile VARCHAR(20)
    );
  `;

  try {
    await pool.query(query);
    console.log("✔ Users table created successfully");
  } catch (error) {
    console.error("❌ Error creating users table:", error.message);
  }
}

module.exports = createUserTable;


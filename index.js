require("dotenv").config();
const PORT = process.env.port ?? 3000;
const express = require("express");
const app = express();
const { neon } = require("@neondatabase/serverless");

const sql = neon(
 process.env.DATABASE_URL
);

app.get("/list", async (req, res) => {
  const data = await sql`select E.* from employees E`;
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`server statred ${PORT}`);
});

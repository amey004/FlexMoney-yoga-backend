const { Client, Pool } = require("pg");
require("dotenv").config();

// const connectionUrl = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`

console.log(process.env.DATABASE_URL);
const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});

module.exports = client;

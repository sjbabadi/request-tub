const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  host: "localhost",
  port: 5432,
  database: "request_bin"
});

module.exports = pool;
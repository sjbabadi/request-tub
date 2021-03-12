let express = require('express');
let app = express();
const cors = require("cors");
const pool = require('./db/db');
const { nanoid } = require('nanoid');

app.use(cors());
app.use(express.json());

app.use(express.static('build'));

app.get('/bin/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'))
})

app.get('/', async (req, res) => {
  try {
    const allRequests = await pool.query("SELECT * FROM bins");
    res.json(allRequests.rows);
    console.log(allRequests);
  } catch (err) {
    console.log(err.message);
  }

});

app.post("/bins", async (req, res) => {
  try {
    const newSlug = nanoid();
    const sql = 'INSERT INTO bins (slug) VALUES($1)';
    const values = [newSlug];
    await pool.query(sql, values);
    res.json({"uri": newSlug});
  } catch(err) {
    console.error(err.message);
  }
});

// return the json of requests data
app.get('/data/:slug', async(req, res) => {
  const _slug = req.params.slug;
  const sql = 'SELECT requests FROM bins WHERE slug = $1';
  const values = [_slug];
  const { rows } = await pool.query(sql, values);
  return rows[0];
});

/*
Sheila post request sample 
app.post("/todos", async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (text) VALUES($1)", [text]);
    res.json(newTodo.rows[0]);
  } catch(err) {
    console.error(err.message);
  }
});
*/

app.listen(4000, () => console.log("#4ize"))
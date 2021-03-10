let express = require('express')
let app = express()
const pool = require('./db/db')

app.get('/', async (req, res) => {
  try {
    const allRequests = await pool.query("SELECT * FROM bins");
    res.json(allRequests.rows);
    console.log(allRequests);
    // res.send(allRequests)
  } catch (err) {
    console.log(err.message);
  }

})

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

app.listen(4000, () => console.log("hi"))

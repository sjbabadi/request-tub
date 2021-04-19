let express = require("express");
let app = express();
const cors = require("cors");
const pool = require("./db/db");
const path = require("path");
const { nanoid } = require("nanoid");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();

const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.use(express.static("./build"));

io.on("connection", (socket) => {
  console.log("New client");
  socket.on("NewClient", (slug) => {
    console.log("slug: ", slug);
    socket.join(slug);
  });
});

app.get("/tub/:slug", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

app.post("/tubs", async (req, res) => {
  try {
    const newSlug = nanoid();
    const sql = "INSERT INTO bins (slug) VALUES($1)";
    const values = [newSlug];
    await pool.query(sql, values);
    res.json({ uri: newSlug });
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/otherplace", async (req, res) => {
  res.json({
    item: "thing",
  });
});

// return the json of requests data
app.get("/data/:slug", async (req, res) => {
  const _slug = req.params.slug;
  const sql = "SELECT requests FROM bins WHERE slug = $1";
  const values = [_slug];
  const { rows } = await pool.query(sql, values);
  if (!rows[0].requests.length) {
    res.json([]);
  } else {
    res.json(rows[0]);
  }
});

methods = ["get", "post", "put", "patch", "delete"];
methods.forEach((method) => {
  app[method]("/:slug", async (req, res) => {
    // req.params, req.headers, req.body
    const slug = req.params.slug;
    const request = {};
    request.headers = req.headers;
    request.method = method;
    request.timestamp = new Date();
    request.body = req.body;
    request.query_params = req.query;
    console.log(request);

    const {
      rows,
    } = await pool.query("SELECT requests FROM bins WHERE slug = $1", [slug]);

    console.log("rows", rows);
    if (!rows[0]) {
      console.log(`bad request to non-existent tub ${slug}`);
      res.status(404).end();
    } else {
      let prevRequests = rows[0].requests;
      if (!prevRequests.length) {
        prevRequests = [];
      }
      prevRequests = [request, ...prevRequests];
      if (prevRequests.length > 20) {
        prevRequests = prevRequests.slice(0, 20);
      }
      //console.log(prevRequests);

      const sql = "UPDATE bins SET requests = $1 WHERE slug = $2 RETURNING *";
      const values = [JSON.stringify(prevRequests), slug];
      const newReq = await pool.query(sql, values);
      //console.log(newReq.rows[0]);
      io.to(slug).emit("UpdateTub", { requests: prevRequests });

      res.status(204).end();
    }
  });
});

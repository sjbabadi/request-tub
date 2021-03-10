let express = require('express')
let app = express()

app.get('/', (req, res) => res.send("Hello!"))

app.listen(4000, () => console.log("hi"))

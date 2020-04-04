const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 10000;

app.use(bodyparser.json());

app.post("/auth", function(req, res) {
  res.send("AUTH OK");
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

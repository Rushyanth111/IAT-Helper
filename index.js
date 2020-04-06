process.title = "iathelper";
const express = require("express");
const bodyparser = require("body-parser");
const dbWorker = require("./DatabaseWorker");
const app = express();
const port = 10000;

app.use(bodyparser.json());

app.post("/auth", async function (req, res) {
  try {
    dbWorker.addUser("1@1", "aba", "123", 1);
    const email = req.body.email;
    const password = req.body.password;
    let x = await dbWorker.authenticateUser(email, password);
    if (!x) {
      res.status(400).send({
        message: "You are not registered.",
      });
      return;
    }

    x = await dbWorker.getUserDetails(email);

    let tokens = dbWorker.generateToken(x.accountId);

    res.json({
      ...x,
      ...tokens,
    });
    return;
  } catch (err) {
    res.status(400).send({
      error: err,
    });
    return;
  }
});

const server = app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

process.on("SIGINT", () => {
  server.close();
  console.log("Server is not listening anymore.");
});

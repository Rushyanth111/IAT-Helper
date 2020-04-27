const dbWorker = require("../DatabaseWorker");

async function authenticate(req, res) {
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
}

module.exports = authenticate;

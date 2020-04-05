const db = require("./createToken");
const token = require("uuid-token-generator");
function refreshToken(refreshToken) {
  const tokgen = new token();
  db.update(
    { refreshToken: refreshToken },
    {
      $set: {
        accessToken: tokgen.generate(),
        createdAt: new Date().getTime(),
      },
    }
  );

  return new Promise((resolve, reject) => {
    db.findOne({ refreshToken: refreshToken }, (err, docs) => {
      if (!err) resolve(docs);
      else reject(err);
    });
  });
}

module.exports = refreshToken;

const db = require("./infoCreate");

async function getUserDetails(email) {
  return new Promise((resolve, reject) => {
    db.findOne(
      { email: email },
      {
        email: 1,
        username: 1,
        accountType: 1,
        _id: 0,
      },
      function (err, docs) {
        if (!err) {
          resolve(docs);
        } else {
          reject(new Error(err));
        }
      }
    );
  });
}

module.exports = getUserDetails;

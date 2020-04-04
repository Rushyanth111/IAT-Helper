const db = require("./infoCreate");

async function getUserDetails(email) {
  return new Promise((resolve, reject) => {
    db.find({ email: email }, function(err, docs) {
      if (!err && docs.length > 0) {
        resolve({
          accountId: docs[0].accountId,
          email: docs[0].email,
          accType: docs[0].accType
        });
      } else {
        reject(new Error("Fetch Failed"));
      }
    });
  });
}

module.exports = getUserDetails;

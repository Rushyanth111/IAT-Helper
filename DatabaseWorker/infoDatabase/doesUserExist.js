const db = require("./infoCreate");

async function doesUserExist(email) {
  return new Promise((resolve, reject) => {
    db.find({ email: email }, function(err, docs) {
      if (!err && docs.length > 0) resolve(true);
      else resolve(false);
    });
  });
}

export default doesUserExist;

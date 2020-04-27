import db from "./infoCreate"

function authenticateUser(email, password) {
  return new Promise((resolve) => {
    db.findOne(
      {
        email: email,
        password: password,
      },
      (err, docs) => {
        if (!err && docs !== null) {
          console.log(docs);
          resolve(true);
        } else {
          resolve(false);
        }
      }
    );
  });
}

export default authenticateUser;

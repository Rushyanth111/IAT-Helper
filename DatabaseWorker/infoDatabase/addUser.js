const db = require("./infoCreate");

function addUser(email, username, password, accountType) {
  db.insert({
    email: email,
    username: username,
    password: password,
    accountype: accountType
  });
}

module.exports = addUser;

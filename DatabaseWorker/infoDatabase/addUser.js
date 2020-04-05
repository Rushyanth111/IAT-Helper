const db = require("./infoCreate");
const token = require("uuid-token-generator");
function addUser(email, username, password, accountType) {
  const tokgen = new token();
  db.insert({
    accountId: tokgen.generate(),
    email: email,
    username: username,
    password: password,
    accountType: accountType,
  });
}

module.exports = addUser;

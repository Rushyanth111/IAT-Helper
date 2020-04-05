const dbCreator = require("../createDatabase");

const db = dbCreator("token.db");

db.ensureIndex({
  fieldName: "accountID",
  unique: true,
});

db.ensureIndex({
  fieldName: "accessToken",
  unique: true,
});

db.ensureIndex({
  fieldName: "createdAt",
  expireAfterSeconds: 1209600,
});

module.exports = db;

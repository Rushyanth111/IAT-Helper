const dbcreator = require("../createDatabase");

const db = dbcreator("info.db");
db.ensureIndex({
  fieldName: "email",
  unique: true,
});

module.exports = db;

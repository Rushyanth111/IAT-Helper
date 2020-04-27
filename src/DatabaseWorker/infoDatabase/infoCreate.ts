import dbcreator from "../createDatabase";

const db = dbcreator("info.db");
db.ensureIndex({
  fieldName: "email",
  unique: true,
});

db.ensureIndex({
  fieldName: "accountId",
  unique: true,
});

export default db;

const db = require("./createToken");
const token = require("uuid-token-generator");

function generateToken(accountId) {
  const tokgen = new token();
  const accessToken = tokgen.generate();
  const refreshToken = tokgen.generate();
  const expires = 3600;
  const createdAt = new Date().getTime();

  const record = {
    accountId: accountId,
    accessToken: accessToken,
    refreshToken: refreshToken,
    expires: expires,
    createdAt: createdAt,
  };

  db.insert(record);

  return record;
}

module.exports = generateToken;

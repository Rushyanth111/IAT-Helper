import Token from 'uid-generator';
import db from './createToken';

function generateToken(accountId) {
  const tokgen = new Token();
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

export default generateToken;

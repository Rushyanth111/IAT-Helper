import Token from 'uid-generator';
import db from './createToken';

async function generateToken(
    accountId: string
): Promise<Record<string, string | number>> {
  const tokgen = new Token();
  const accessToken: string = await tokgen.generate();
  const refreshToken: string = await tokgen.generate();
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

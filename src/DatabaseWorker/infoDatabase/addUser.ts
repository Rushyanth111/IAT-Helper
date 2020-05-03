import Token from 'uid-generator';
import db from './infoCreate';
function addUser(
    email: string,
    username: string,
    password: string,
    accountType: number
): void {
  const tokgen = new Token();
  const accountId = tokgen.generateSync();
  db.insert({
    accountId: accountId,
    email: email,
    username: username,
    password: password,
    accountType: accountType,
  });
}

export default addUser;

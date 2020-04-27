import insert from "./infoCreate";
import token from "uid-generator";
function addUser(email: string, username: string, password: string, accountType: number) {
  const tokgen = new token();
  insert({
    accountId: tokgen.generate(),
    email: email,
    username: username,
    password: password,
    accountType: accountType,
  });
}

export default addUser;

import db from './infoCreate';

function authenticateUser(email: string, password: string): Promise<boolean> {
  return new Promise((resolve) => {
    db.findOne(
        {
          email: email,
          password: password,
        },
        (err, docs) => {
          if (!err && docs !== null) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
    );
  });
}

export default authenticateUser;

const db = require('./infoCreate').default;

async function getUserDetails(email: string): Promise<JSON> {
  return new Promise((resolve, reject) => {
    db.findOne(
        {email: email},
        {
          accountId: 1,
          email: 1,
          username: 1,
          accountType: 1,
          _id: 0,
        },
        function(err: string, docs: JSON | PromiseLike<JSON>) {
          if (!err) {
            resolve(docs);
          } else {
            reject(new Error(err));
          }
        }
    );
  });
}

export default getUserDetails;

import db from './createToken';
import token from 'uid-generator';
function refreshToken(refreshToken) {
  const tokgen = new token();
  db.update(
      {refreshToken: refreshToken},
      {
        $set: {
          accessToken: tokgen.generate(),
          createdAt: new Date().getTime(),
        },
      }
  );

  return new Promise((resolve, reject) => {
    db.findOne(
        {refreshToken: refreshToken},
        {
          refreshToken: 1,
          accessToken: 1,
          expiers: 1,
          createdAt: 1,
          _id: 0,
        },
        (err, docs) => {
          if (!err) resolve(docs);
          else reject(err);
        }
    );
  });
}

export default refreshToken;

import db from './notifCreate';
function getNotifs(id: string): Record<string, any> {
  return new Promise((resolve, reject) => {
    db.find(
        {idTo: id, read: false},
        {
          notificationId: 1,
          idFrom: 1,
          idTo: 1,
          message: 1,
          _id: 0,
        },
        (err, docs) => {
          if (!err && docs.length >= 0) {
            resolve(docs);
          } else {
            reject(new Error('Something Went wrong'));
          }
        }
    );
  });
}

export default getNotifs;

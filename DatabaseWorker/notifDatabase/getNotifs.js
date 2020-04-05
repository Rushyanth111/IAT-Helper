const db = require("./notifCreate");
function getNotifs(id) {
  return new Promise((resolve, reject) => {
    db.find(
      { idTo: id, read: false },
      {
        notificationId: 1,
        idFrom: 1,
        idTo: 1,
        message: 1,
        _id: 0
      },
      (err, docs) => {
        if (!err && docs.length >= 0) {
          resolve(docs);
        } else {
          reject(new Error("Something Went wrong"));
        }
      }
    );
  });
}

module.exports = getNotifs;

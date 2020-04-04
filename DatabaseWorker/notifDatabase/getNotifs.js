const db = require("./notifCreate");
function getNotifs(id) {
  return new Promise((resolve, reject) => {
    db.find({ idTo: id, read: false }, (err, docs) => {
      if (!err && docs.length >= 0) {
        resolve(docs);
      } else {
        reject(new Error("Something Went wrong"));
      }
    });
  });
}

export default getNotifs;
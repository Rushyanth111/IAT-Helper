const db = require("./notifCreate");
function markReadNotifs(notificationId) {
  return new Promise((resolve, reject) => {
    db.update(
      { notificationId: notificationId },
      {
        $set: { read: true }
      }
    );
  });
}

export default markReadNotifs;

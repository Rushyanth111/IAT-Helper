import db from './notifCreate';
function markReadNotifs(notificationId) {
  return new Promise((resolve, reject) => {
    db.update(
        {notificationId: notificationId},
        {
          $set: {read: true},
        }
    );
  });
}

module.exports = markReadNotifs;

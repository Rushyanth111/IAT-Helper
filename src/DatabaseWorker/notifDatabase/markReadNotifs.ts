import db from './notifCreate';
function markReadNotifs(notificationId: string): void {
  return new Promise((resolve, reject) => {
    db.update(
        {notificationId: notificationId},
        {
          $set: {read: true},
        }
    );
  });
}

export default markReadNotifs;

import db from './notifCreate';
function markReadNotifs(notificationId: string): void {
  db.update(
      {notificationId: notificationId},
      {
        $set: {read: true},
      }
  );
}

export default markReadNotifs;

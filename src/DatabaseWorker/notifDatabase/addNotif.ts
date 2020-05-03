import Tokens from 'uid-generator';
import db from './notifCreate';
function addNotif(fromId: string, ToId: string, Message: string): void {
  const tokgen = new Tokens();
  db.insert({
    notificationId: tokgen.generate(),
    idFrom: fromId,
    idTo: ToId,
    message: Message,
    read: false,
  });
}

export default addNotif;

import Tokens from 'uid-generator';
import db from './notifCreate';
function addNotif(fromId, ToId, Message) {
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

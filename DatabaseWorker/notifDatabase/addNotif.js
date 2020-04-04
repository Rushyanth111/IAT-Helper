const tokens = require("uuid-token-generator");
const db = require("./notifCreate");
function addNotif(fromId, ToId, Message) {
  const tokgen = new tokens();
  db.insert({
    notificationId: tokgen.generate(),
    idFrom: fromId,
    ifTo: ToId,
    message: Message,
    read: false
  });
}

module.exports = addNotif;

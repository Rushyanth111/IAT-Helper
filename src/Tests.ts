const os = require('fs');
const dbWorker = require('./DatabaseWorker');
async function main() {
  try {
    dbWorker.addUser('xyz@gmail.com', 'abc', 'passsss', 1);
    let x = await dbWorker.doesUserExist('xyz@gmail.com');
    console.log(x);
    x = await dbWorker.getUserDetails('xyz@gmail.com');
    console.log(x);

    x = await dbWorker.authenticateUser('xyz@gmail.com', 'axbc');
    console.log(x);

    // Notifs

    dbWorker.addNotifs('1', '2', 'HECK YO');
    x = await dbWorker.getNotifs('2');
    console.log(x);

    dbWorker.markReadNotifs(x[0].notificationId);

    x = await dbWorker.getNotifs('2');
    console.log(x);
  } catch (error) {
    console.log(error);
  }

  process.on('exit', () => {
    os.unlinkSync('info.db');
    os.unlinkSync('notif.db');
  });
}

main();

const os = require("fs");
const dbWorker = require("./DatabaseWorker");
async function main() {
  try {
    dbWorker.addUser("xyz@gmail.com", "abc", "passsss", "boo");
    let x = await dbWorker.getUserDetails("xyz@gmail.com");
    console.log(x);
  } catch (error) {
    console.log(error);
  }

  process.on("exit", () => {
    os.unlinkSync("info.db");
    os.unlinkSync("notif.db");
  });
}

main();

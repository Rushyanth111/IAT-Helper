const os = require("fs");

async function main() {
    db.insert({
      accountId: "1234",
      email: "essss",
      password: "kekw",
      accType: 3
    });
  
    let x = await getUserDetails("essss");
  
    console.log(x);
    process.on("exit", () => {
      os.unlinkSync("info.db");
    });
  }
  
  main();
  
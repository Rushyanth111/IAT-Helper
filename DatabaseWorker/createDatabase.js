const datastore = require("nedb");
function createDatabase(filename) {
  return new datastore({ filename: filename, autoload: true });
}

export default createDatabase;

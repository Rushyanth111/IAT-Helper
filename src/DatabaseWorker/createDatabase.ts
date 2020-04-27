import datastore from "nedb";
function createDatabase(filename: string) {
  return new datastore({ filename: filename, autoload: true });
}

export default createDatabase;

import Datastore from 'nedb';

function createDatabase(filename: string): Datastore {
  if (process.env.NODE_ENV === 'development') {
    // In memory Force for Development Only.
    return new Datastore();
  }
  return new Datastore({filename: filename, autoload: true});
}

export default createDatabase;

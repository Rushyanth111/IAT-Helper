import dbcreator from '../createDatabase';

const db = dbcreator('notif.db');
db.ensureIndex({
  fieldName: 'email',
  unique: true,
});
const settingInterval = setInterval(() => {
  db.remove(
      {
        read: true,
      },
      {
        multi: true,
      }
  );
}, 10000);

process.on('SIGINT', () => {
  clearInterval(settingInterval);
});

export default db;

import {authenticateUser} from './DatabaseWorker';
import bodyparser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyparser());
const port: number = 10000;

app.post('/auth', authenticateUser);

const server = app.listen(port, () => {
  console.log(`Listening on Port ${port} and making sure that this works`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('Server is not listening anymore.');
});

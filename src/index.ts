import {authenticate, register} from './Router';

import bodyparser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyparser.json());
const port = 10000;

app.post('/auth', authenticate);
app.post('/register', register);
const server = app.listen(port, () => {
  console.log(`Listening on Port ${port}!`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('Server is not listening anymore.');
});

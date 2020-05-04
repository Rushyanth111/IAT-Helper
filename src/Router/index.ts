import authRouter from './Auth';
import bodyparser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyparser.json());

app.post('/auth', authRouter);

export default app;

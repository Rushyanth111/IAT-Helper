import {Request, Response} from 'express-serve-static-core';

import {addUser} from '../../DatabaseWorker';

async function register(req: Request, res: Response): Promise<void> {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const accountType = req.body.accountType;

    addUser(email, username, password, accountType);

    res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err);
  }
}

export default register;

import {Request, Response} from 'express-serve-static-core';
import {
  authenticateUser,
  generateToken,
  getUserDetails,
} from '../DatabaseWorker';

async function authenticate(req: Request, res: Response) {
  try {
    const email = req.body['email'];
    const password = req.body.password;
    let x = await authenticateUser(email, password);
    x = await getUserDetails(email);

    const tokens = generateToken(x.accountId);

    res.status(400).json({
      ...tokens,
      ...x,
    });
    return;
  } catch (err) {
    return;
  }
}

export default authenticate;

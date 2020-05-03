import {Request, Response} from 'express-serve-static-core';
import {
  authenticateUser,
  generateToken,
  getUserDetails,
} from '../DatabaseWorker';

async function authenticate(req: Request, res: Response): Promise<void> {
  try {
    const email: string | undefined = req.body.email;
    const password: string | undefined = req.body.password;
    if (email === undefined || password === undefined) {
      throw new Error('No Email/Password was provided.');
    }

    const x = await authenticateUser(email, password);
    if (x == false) {
      throw new Error('You have not registered or Have the wrong Password.');
    }
    const userDetails = await getUserDetails(email);

    const tokens = await generateToken(x.accountId);

    res.status(200).json({
      ...tokens,
      ...userDetails,
    });
    return;
  } catch (err) {
    res.status(401).json({
      Error: err,
    });
    return;
  }
}

export default authenticate;

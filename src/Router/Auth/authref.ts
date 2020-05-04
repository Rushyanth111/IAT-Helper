import {Request, Response} from 'express';

import {refreshToken} from '../../DatabaseWorker';

async function authRefresh(req: Request, res: Response): Promise<void> {
  try {
    const refToken = req.body.refreshToken;

    const refreshed = await refreshToken(refToken);

    res.status(200).json(refreshed);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
}

export default authRefresh;

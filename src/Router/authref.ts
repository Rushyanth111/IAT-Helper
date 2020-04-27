const dbWorker = require('../DatabaseWorker');

async function authRefresh(req, res) {
  try {
    const refreshToken = req.body.refreshToken;

    const refreshed = await dbWorker.refreshToken(refreshToken);

    res.status(200).json(refreshed);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
}

module.exports = authRefresh;

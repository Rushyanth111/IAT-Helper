const { addUser, getUserDetails, authenticateUser } = require("./infoDatabase");
const { getNotifs, addNotifs, markReadNotifs } = require("./notifDatabase");
const { generateToken, refreshToken } = require("./tokenDatabase");
module.exports = {
  getUserDetails: getUserDetails,
  getNotifs: getNotifs,
  addNotifs: addNotifs,
  addUser: addUser,
  markReadNotifs: markReadNotifs,
  authenticateUser: authenticateUser,
  generateToken: generateToken,
  refreshToken: refreshToken,
};

const {addUser, getUserDetails, authenticateUser} = require('./infoDatabase');
const {getNotifs, addNotifs, markReadNotifs} = require('./notifDatabase');
const {generateToken, refreshToken} = require('./tokenDatabase');

export {
  getUserDetails,
  getNotifs,
  addNotifs,
  addUser,
  markReadNotifs,
  authenticateUser,
  generateToken,
  refreshToken,
};

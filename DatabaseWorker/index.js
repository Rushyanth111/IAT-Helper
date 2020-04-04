const { addUser, doesUserExist, getUserDetails } = require("./infoDatabase");
const { getNotifs, addNotifs, markReadNotifs } = require("./notifDatabase");
module.exports = {
  doesUserExist: doesUserExist,
  getUserDetails: getUserDetails,
  getNotifs: getNotifs,
  addNotifs: addNotifs,
  addUser: addUser,
  markReadNotifs: markReadNotifs
};

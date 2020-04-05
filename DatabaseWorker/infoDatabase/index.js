const doesUserExist = require("./doesUserExist");
const getUserDetails = require("./getUserDetails");
const addUser = require("./addUser");
const authenticateUser = require("./authenticateUser");
module.exports = {
  doesUserExist: doesUserExist,
  getUserDetails: getUserDetails,
  addUser: addUser,
  authenticateUser: authenticateUser,
};

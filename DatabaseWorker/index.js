const createDatabase = import("./createDatabase");
const { doesUserExist, getUserDetails } = import("./infoDatabase");
const { getNotifs, addNotifs, markReadNotifs } = import("./notifDatabase");
export { createDatabase, doesUserExist, getUserDetails };

import UserModel from "./../models/userModel";

// update userInfo
let updateUser = (id, item) => {
  return UserModel.updateUser(id, item);
};

module.exports = {
  updateUser: updateUser
};

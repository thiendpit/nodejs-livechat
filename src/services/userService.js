import UserModel from "./../models/userModel";
import { resolve, reject } from "bluebird";
import { transErrors } from "./../../lang/vi";
import bcrypt from "bcrypt";

const saltRounds = 7;

// update userInfo
let updateUser = (id, item) => {
  return UserModel.updateUser(id, item);
};

// update password for user
let updatePassword = (id, dataUpdate) => {
  return new Promise(async (resolve, reject) => {
    let currentUser = await UserModel.findUserById(id);
    if(!currentUser) {
      return reject(transErrors.account_undefined);
    }

    let checkCurrentPassword = await currentUser.comparePassword(dataUpdate.currentPassword);
    if(!checkCurrentPassword) {
      return reject(transErrors.user_current_password_failed);
    }

    let salt = bcrypt.genSaltSync(saltRounds);
    await UserModel.updatePassword(id, bcrypt.hashSync(dataUpdate.newPassword, salt));
    resolve(true);
  });
};

module.exports = {
  updateUser: updateUser,
  updatePassword: updatePassword
};

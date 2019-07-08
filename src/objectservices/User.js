const UserModel = require("../models/user");

const createUser = async user => {
  const user = new UserModel(user);
  return await user.save().exec();
};

module.exports = { createUser };

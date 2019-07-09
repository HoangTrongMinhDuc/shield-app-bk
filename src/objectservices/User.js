const UserModel = require("../models/user");

const createUser = async user => {
  const userOb = new UserModel(user);
  return await userOb.save().exec();
};

const getUserById = async id => {
  return await UserModel.findById(id);
};

const getUserByEmail = async email => {
  return await UserModel.findOne({ email });
};

module.exports = { createUser, getUserById, getUserByEmail };

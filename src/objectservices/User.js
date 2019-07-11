const UserModel = require("../models/user");

const createUser = async user => {
  const userOb = new UserModel(user);
  return await userOb.save().exec();
};

const getUserById = async id => {
  return await UserModel.findById(id);
};

const getUserByEmailOrUsername = async (username, email) => {
  return await UserModel.find({})
    .or([{ username, email }])
    .exec();
};

const getUserByEmail = async email => await UserModel.findOne({ email }).exec();

module.exports = { createUser, getUserById, getUserByEmailOrUsername, getUserByEmail };

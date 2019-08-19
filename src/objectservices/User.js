const UserModel = require("../models/user");

const createUser = async user => new UserModel(user).save();

const getUserById = id => UserModel.findById(id);

const getUserByEmailOrUsername = (username, email) =>
  UserModel.find({})
    .or([{ username, email }])
    .exec();

const getUserByEmail = email => UserModel.findOne({ email }).exec();

module.exports = {
  createUser,
  getUserById,
  getUserByEmailOrUsername,
  getUserByEmail
};

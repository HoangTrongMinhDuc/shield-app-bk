const UserService = require("../../objectservices/User");
const ErrorHelper = require("../../helpers/ErrorHelper");
const { getHashString, getRandomString } = require("../../helpers/HashHelper");

const UsernameOrEmailExist =
  "This username or email already used, please use other username and email";
const CreateNewUserSuccess = "Create new user successfully";

const create = async (req, res) => {
  try {
    const { username, displayName, email, password } = getRequestData(req);
    if (!isValidInput(username, email, password))
      return ErrorHelper.BadRequest(res);
    const userInDb = await UserService.getUserByEmailOrUsername(
      username,
      email
    );
    if (userInDb.length !== 0)
      return ErrorHelper.BadRequest(res, UsernameOrEmailExist);
    const saltPassword = getRandomString();
    const hashPassword = getHashString(password, saltPassword);
    const newUser = {
      username: username,
      displayName: displayName,
      email: email,
      hash_password: hashPassword,
      salt_password: saltPassword
    };
    await UserService.createUser(newUser);
    res.json({ message: CreateNewUserSuccess });
  } catch (err) {
    ErrorHelper.InternalServerError(res);
  }
};

const getRequestData = req => {
  let { username, displayName, email, password } = req.body;
  username = username ? username.trim() : null;
  displayName = displayName || "";
  email = email ? email.trim() : null;
  password = password || null;
  return { username, displayName, email, password };
};

const EmailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
const isValidInput = (username, email, password) => {
  if (!username || !email || !password) return false;
  if (username.length < 6 || !EmailRegex.test(email) || password.length < 6)
    return false;
  return true;
};

module.exports = create;

const { Forbidden, InternalServerError } = require("../helpers/ErrorHelper");
const { getUserById } = require("../objectservices/User");
const { isAllowProperty } = require("../helpers/ObjectAccess");
const { isEmpty } = require("lodash");

const AccessFilter = (requirePers = [], highPers = []) => async (
  req,
  res,
  next
) => {
  try {
    const user = await getUserById(req.user.id);
    if (!user) return Forbidden(res);
    const userPermissions = user.access.toJSON();
    const highPermissions = insertParamToPlaceholder(highPers, req.params);
    if (!isAllowHighPermission(highPermissions, userPermissions))
      return Forbidden(res);
    const requirePermissions = insertParamToPlaceholder(
      requirePers,
      req.params
    );
    if (!isAllowPermission(requirePermissions, userPermissions))
      return Forbidden(res);
    return next();
  } catch (err) {
    return InternalServerError(res);
  }
};

const insertParamToPlaceholder = (pers, params) =>
  pers.map(per =>
    Object.entries(params).reduce(
      (fullPer, param) => fullPer.replace(`{${param[0]}}`, param[1]),
      per
    )
  );

const isAllowHighPermission = (highPermissions, userPermissions) =>
  highPermissions.some(per => isAllowProperty(userPermissions, per)) ||
  isEmpty(highPermissions);

const isAllowPermission = (requirePermissions, userPermissions) =>
  requirePermissions.every(per => isAllowProperty(userPermissions, per)) ||
  isEmpty(requirePermissions);

module.exports = AccessFilter;

const router = require("express").Router();
const {
  JsonWithAuthMw,
  JsonWithAuthorization
} = require("../../middleware/MidWare");

router.get("/", require("./list"));

router.post("/", JsonWithAuthMw, require("./create"));

router.put(
  "/:teamId",
  JsonWithAuthorization(["team.{teamId}.information.update"], ["team.manage"]),
  require("./update")
);

router.delete(
  "/:teamId",
  JsonWithAuthorization(["team.{teamId}.delete"], ["team.manage"]),
  require("./remove")
);

module.exports = router;

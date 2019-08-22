const router = require("express").Router();
const { JsonWithAuthorization } = require("../../middleware/MidWare");

router.post(
  "/",
  JsonWithAuthorization(["publisher.create"]),
  require("./create")
);

router.put(
  "/:publisherId",
  JsonWithAuthorization(["publisher.update"]),
  require("./update")
);

router.get("/", require("./list"));

router.get("/:publisherId", require("./get"));

router.delete(
  "/:publisherId",
  JsonWithAuthorization(["publisher.delete"]),
  require("./remove")
);

module.exports = router;

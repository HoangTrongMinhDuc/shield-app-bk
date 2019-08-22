const router = require("express").Router();
const { JsonWithAuthorization } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthorization(["status.create"]), require("./create"));

router.put(
  "/:statusId",
  JsonWithAuthorization(["status.update"]),
  require("./update")
);

router.get("/", require("./list"));

router.get("/:statusId", require("./get"));

router.delete(
  "/:statusId",
  JsonWithAuthorization(["status.delete"]),
  require("./remove")
);

module.exports = router;

const router = require("express").Router();
const { JsonWithAuthorization } = require("../../middleware/MidWare");

router.post(
  "/",
  JsonWithAuthorization(["booktype.create"]),
  require("./create")
);

router.put(
  "/:bookTypeId",
  JsonWithAuthorization(["booktype.update"]),
  require("./update")
);

router.get("/", require("./list"));

router.get("/:bookTypeId", require("./get"));

router.delete(
  "/:bookTypeId",
  JsonWithAuthorization(["booktype.delete"]),
  require("./remove")
);

module.exports = router;

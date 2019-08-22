const router = require("express").Router();
const { JsonWithAuthorization } = require("../../middleware/MidWare");

router.post(
  "/",
  JsonWithAuthorization(["category.create"]),
  require("./create")
);

router.put(
  "/:categoryId",
  JsonWithAuthorization(["category.update"]),
  require("./update")
);

router.get("/", require("./list"));

router.get("/:categoryId", require("./get"));

router.delete(
  "/:categoryId",
  JsonWithAuthorization(["category.delete"]),
  require("./remove")
);

module.exports = router;

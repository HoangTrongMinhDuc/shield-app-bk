const router = require("express").Router();
const { JsonWithAuthorization } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthorization(["author.create"]), require("./create"));

router.get("/", require("./list"));

router.get("/:authorId", require("./get"));

router.delete(
  "/:authorId",
  JsonWithAuthorization(["author.delete"]),
  require("./remove")
);

router.put(
  "/:authorId",
  JsonWithAuthorization(["author.update"]),
  require("./update")
);

module.exports = router;

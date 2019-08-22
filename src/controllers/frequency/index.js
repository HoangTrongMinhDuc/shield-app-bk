const router = require("express").Router();
const { JsonWithAuthorization } = require("../../middleware/MidWare");

router.post(
  "/",
  JsonWithAuthorization(["frequency.create"]),
  require("./create")
);

router.put(
  "/:frequencyId",
  JsonWithAuthorization(["frequency.update"]),
  require("./update")
);

router.get("/", require("./list"));

router.get("/:frequencyId", require("./get"));

router.delete(
  "/:frequencyId",
  JsonWithAuthorization(["frequency.delete"]),
  require("./remove")
);

module.exports = router;

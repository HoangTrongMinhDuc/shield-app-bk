const router = require("express").Router();
const { JsonWithAuthMw, AuthMw } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthMw, require("./create"));
router.put("/:frequencyId", JsonWithAuthMw, require("./update"));
router.get("/", require("./list"));
router.get("/:frequencyId", require("./get"));
router.delete("/:frequencyId", AuthMw, require("./remove"));

module.exports = router;

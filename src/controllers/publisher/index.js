const router = require("express").Router();
const { JsonWithAuthMw, AuthMw } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthMw, require("./create"));
router.put("/:publisherId", JsonWithAuthMw, require("./update"));
router.get("/", require("./list"));
router.get("/:publisherId", require("./get"));
router.delete("/:publisherId", AuthMw, require("./remove"));

module.exports = router;

const router = require("express").Router();
const { JsonWithAuthMw, AuthMw } = require("../../middleware/MidWare");

router.get("/", require("./list"));
router.post("/", JsonWithAuthMw, require("./create"));
router.put("/:teamId", JsonWithAuthMw, require("./update"));
router.delete("/:teamId", AuthMw, require("./remove"));

module.exports = router;

const router = require("express").Router();
const { JsonWithAuthMw, AuthMw } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthMw, require("./create"));
router.put("/:statusId", JsonWithAuthMw, require("./update"));
router.get("/", require("./list"));
router.get("/:statusId", require("./get"));
router.delete("/:statusId", AuthMw, require("./remove"));

module.exports = router;

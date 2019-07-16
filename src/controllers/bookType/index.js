const router = require("express").Router();
const { JsonWithAuthMw, AuthMw } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthMw, require("./create"));
router.put("/:bookTypeId", JsonWithAuthMw, require("./update"));
router.get("/", require("./list"));
router.get("/:bookTypeId", require("./get"));
router.delete("/:bookTypeId", AuthMw, require("./remove"));

module.exports = router;

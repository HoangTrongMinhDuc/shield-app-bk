const router = require("express").Router();
const { JsonWithAuthMw, AuthMw } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthMw, require("./create"));
router.put("/:categoryId", JsonWithAuthMw, require("./update"));
router.get("/", require("./list"));
router.get("/:categoryId", require("./get"));
router.delete("/:categoryId", AuthMw, require("./remove"));

module.exports = router;

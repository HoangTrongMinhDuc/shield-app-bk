const router = require("express").Router();
const { JsonWithAuthMw, AuthMw } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthMw, require("./create"));
router.put("/:magazineId", JsonWithAuthMw, require("./update"));
router.get("/", require("./list"));
router.get("/:magazineId", require("./get"));
router.delete("/:magazineId", AuthMw, require("./remove"));

module.exports = router;

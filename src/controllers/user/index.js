const router = require("express").Router();
const { JsonWithAuthMw } = require("../../middleware/MidWare");

router.post("/", JsonWithAuthMw, require("./create"));

module.exports = router;

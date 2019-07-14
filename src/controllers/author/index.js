const router = require("express").Router();
const bodyParser = require("body-parser");
const CheckToken = require("../../middleware/CheckToken");

router.post("/", [bodyParser.json(), CheckToken], require("./create"));
router.get("/", require("./list"));
router.get("/:authorId", require("./get"));
router.delete("/:authorId", CheckToken, require("./remove"));
router.put("/:authorId", [bodyParser.json(), CheckToken], require("./update"));

module.exports = router;

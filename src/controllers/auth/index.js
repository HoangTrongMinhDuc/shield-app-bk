const router = require("express").Router();
const bodyParser = require("body-parser");
const CheckToken = require('../../middleware/CheckToken')

router.post("/", bodyParser.json(), require("./auth"));
router.get("/", [bodyParser.json(), CheckToken], require("./get"));

module.exports = router;

const router = require("express").Router();
const bodyParser = require("body-parser");

router.post("/", bodyParser.json(), require("./auth"));

module.exports = router;

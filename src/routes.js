const router = require("express")();

//Configure route for api here
router.use("/auth", require("./controllers/auth"));

module.exports = router;

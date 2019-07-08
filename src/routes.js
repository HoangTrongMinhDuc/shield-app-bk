const router = require("express")();

//Configure route for api here
router.use("/users", require("./controllers/user"));

module.exports = router;

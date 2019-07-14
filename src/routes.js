const router = require("express")();

router.use("/auth", require("./controllers/auth"));
router.use("/users", require("./controllers/user"));
router.use("/authors", require("./controllers/author"));

module.exports = router;

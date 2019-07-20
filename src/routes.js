const router = require("express")();

router.use("/auth", require("./controllers/auth"));
router.use("/users", require("./controllers/user"));
router.use("/authors", require("./controllers/author"));
router.use("/booktypes", require("./controllers/bookType"));
router.use("/categories", require("./controllers/category"));
router.use("/frequencies", require("./controllers/frequency"));
router.use("/magazines", require("./controllers/magazine"));
router.use("/publishers", require("./controllers/publisher"));

module.exports = router;

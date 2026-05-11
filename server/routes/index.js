const router = require("express").Router();

router.use("/auth", require("./authRoutes"));
router.use("/account", require("./accountRoutes"));
router.use("/transaction", require("./transactionRoutes"));

module.exports = router;
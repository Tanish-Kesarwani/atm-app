const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const { getAccount } = require("../controllers/accountController");

router.get("/", protect, getAccount);

module.exports = router;
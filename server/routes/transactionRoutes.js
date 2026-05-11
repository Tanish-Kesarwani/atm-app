const router = require("express").Router();
const protect = require("../middleware/authMiddleware");

const {
  deposit,
  withdraw,
  history
} = require("../controllers/transactionController");

router.post("/deposit", protect, deposit);
router.post("/withdraw", protect, withdraw);
router.get("/history", protect, history);

module.exports = router;
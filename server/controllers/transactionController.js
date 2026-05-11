const { Transaction } = require("../models");

exports.deposit = async (req, res) => {
  try {
    let { amount } = req.body;

    amount = Number(amount); // 🔥 FIX

    if (!amount || amount <= 0) {
      return res.status(400).json({ msg: "Invalid amount" });
    }

    req.user.balance += amount;
    await req.user.save();

    await Transaction.create({
      type: "deposit",
      amount,
      UserId: req.user.id
    });

    res.json({ balance: req.user.balance });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.withdraw = async (req, res) => {
  try {
    let { amount } = req.body;

    amount = Number(amount); // 🔥 FIX

    if (!amount || amount <= 0) {
      return res.status(400).json({ msg: "Invalid amount" });
    }

    if (req.user.balance < amount) {
      return res.status(400).json({ msg: "Insufficient funds" });
    }

    req.user.balance -= amount;
    await req.user.save();

    await Transaction.create({
      type: "withdraw",
      amount,
      UserId: req.user.id
    });

    res.json({ balance: req.user.balance });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.history = async (req, res) => {
  const transactions = await Transaction.findAll({
    where: { UserId: req.user.id },
    order: [["createdAt", "DESC"]]
  });

  res.json(transactions);
};
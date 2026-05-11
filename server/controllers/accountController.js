exports.getAccount = async (req, res) => {
  res.json({
    name: req.user.name,
    balance: req.user.balance
  });
};
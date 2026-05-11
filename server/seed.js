const bcrypt = require("bcrypt");
const { User } = require("./models");

(async () => {
  const hashedPin = await bcrypt.hash("1234", 10);

  await User.create({
    name: "Alice",
    pin: hashedPin,
    balance: 5000
  });

  console.log("User created successfully");
})();
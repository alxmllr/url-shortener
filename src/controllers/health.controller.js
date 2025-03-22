const healthService = require("../services/health.service");

const sayHello = async (req, res) => {
  try {
    const message = await healthService.getHelloMessage();
    res.json({ message });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  sayHello,
};

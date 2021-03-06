const Payments = artifacts.require("PaymentProcessor");

module.exports = function (deployer) {
  deployer.deploy(Payments);
};

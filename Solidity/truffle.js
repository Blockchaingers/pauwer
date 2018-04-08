module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "172.20.10.2",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 6700000
    }
  }
};

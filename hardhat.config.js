/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY, LOCAL } = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "bsc",
   networks: {
      hardhat: {},
      bsc: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      localhost: {
         url: LOCAL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
    apiKey: "XCY1WA2ZQKTQCZP1E54Q4TP8BYQGV7JEKY"
  }
}
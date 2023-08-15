require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/-whWX7DHzx-TZeXMubRQu9sni-O8-Ska";
const NEXT_PUBLIC_PRIVATE_KEY = "396b8dc06713719150d99f328b46da2741f1d611c6a672c0b7dafaad10da77ac KEY";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  //defaultNetwork: "matic",
  //networks: {
  //  hardhat: {},
  //  polygon_mumbai: {
  //    url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
  //    accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
  //  },
  //},

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};

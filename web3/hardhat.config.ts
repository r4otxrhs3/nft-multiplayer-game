import dotenv from 'dotenv';
import '@nomiclabs/hardhat-ethers';

import { network } from 'hardhat';

dotenv.config();

export default {
  solidity: {
    version: '0.8.16',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
    network: {// 
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 225000000000,
      chainId: 80001,
     },
  },
};
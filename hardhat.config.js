require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

const {PRIVATE_KEY, API_KEY} = process.env;

module.exports = {
    solidity: "0.8.4",
    networks: {
        ropsten:{
            url: `https://eth-ropsten.alchemyapi.io/v2/${API_KEY}`,
            accounts: [`0x${PRIVATE_KEY}`],
        }
    }
}
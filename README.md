# ethereum-with-javascript-demo
A demo of how to interact with the Ethereum blockchain using Javascript and ethers js

## Getting Started

Using Node 19.6.1 and npm 9.4.0

```
npm install
```

Go to [Alchemy](https://www.alchemy.com/) and get an API key for ETH Mainnet and Goerli networks.
Add these API keys to the `contants.js` file.

In each of the 5 scripts add the appropriate wallet addresses and keys before running.

### Security Note

In the `3-send-a-transaction.js` file, this requires a wallet private key. You can export this from MetaMask but be careful, do not use your personal wallet. Create a new test account that you can get rid of. If you use your personal wallet and someone else get's access to your private key, they will be able to steal your funds.
Additionally this specific demo is set up to run on the `goerli` network so no real funds will be used / spent. You can get goerli ETH from any of the faucets e.g [https://goerlifaucet.com/](https://goerlifaucet.com/)

## Running each script

From a terminal run scripts like this
```
node ./1-read-wallet-balance.js
```

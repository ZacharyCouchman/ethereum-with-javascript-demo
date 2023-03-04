import { ethers } from "ethers"
import { formatEther } from "ethers/lib/utils.js";
import { ALCHEMY_API_KEY_MAINNET } from './constants.js';

const walletAddress = ""; // add the wallet address you want to check the balance of

const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY_MAINNET}`;

async function getWalletBalance(){
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const balance = await provider.getBalance(walletAddress);

  console.log(`ETH balance of ${walletAddress} is ${formatEther(balance)}`)
}
getWalletBalance();
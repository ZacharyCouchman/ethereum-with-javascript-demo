import { ethers } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";
import { ALCHEMY_API_KEY_MAINNET } from './constants.js';

const walletAddress = ""; // add the wallet address you want to check the balance of

const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY_MAINNET}`;
const imxERC20TokenAddress = "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF"; // Immutable X ERC20 token contract address

const contractABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address account) view returns (uint256)"
];

async function getERC20Balance(){
  
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  const imxTokenContract = new ethers.Contract(imxERC20TokenAddress, contractABI, provider);
  
  const nameOfIMXToken = await imxTokenContract.name();
  const symbolOfIMXToken = await imxTokenContract.symbol();
  const decimalsOfIMXToken = await imxTokenContract.decimals();
  const balance = await imxTokenContract.balanceOf(walletAddress);

  console.log(`The name of ERC20 token is ${nameOfIMXToken} and it's symbol is ${symbolOfIMXToken}.`)
  console.log(`The currency has ${decimalsOfIMXToken} decimals.`)
  console.log(`The IMX token balance of ${walletAddress} is ${formatUnits(balance, decimalsOfIMXToken)}`)
}
getERC20Balance();
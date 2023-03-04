import { ethers } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils.js";
import { ALCHEMY_API_KEY_GOERLI } from './constants.js';

// As this demo is for sending funds, connect to the goerli test network to not spend real money
const rpcUrl = `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY_GOERLI}`;

const wallet1PublicAddress = ""; // add the wallet address you want to send goerli ETH from
const wallet1PrivateKey = ""; // Do not expose this Private key. Only use a test wallet for this demo.
const wallet2PublicAddress = ""; // add the wallet address you want to send funds to

async function sendATransaction() {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(wallet1PrivateKey, provider);
  const wallet1Balance = await provider.getBalance(wallet1PublicAddress);
  const wallet2Balance = await provider.getBalance(wallet2PublicAddress);

  console.log(`Wallet 1 balance before transaction: ${formatEther(wallet1Balance)}`);
  console.log(`Wallet 2 balance before transaction: ${formatEther(wallet2Balance)}`);

  const txRequest = {
    to: wallet2PublicAddress,
    value: parseEther("0.001"),
  }

  const txResponse = await wallet.sendTransaction(txRequest);

  console.log("Transaction response is:")
  console.log(txResponse);

  console.log("Waiting for transaction to be confirmed.");
  console.log(`You can check the status of this transaction on Etherscan at https://goerli.etherscan.io/tx/${txResponse.hash}`);
  const txReceipt = await provider.waitForTransaction(txResponse.hash);

  const wallet1BalanceAfter = await provider.getBalance(wallet1PublicAddress);
  const wallet2BalanceAfter = await provider.getBalance(wallet2PublicAddress);
  console.log(`Wallet 1 balance after transaction: ${formatEther(wallet1BalanceAfter)}`);
  console.log(`Wallet 2 balance after transaction: ${formatEther(wallet2BalanceAfter)}`);
}

sendATransaction();
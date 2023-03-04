import { ethers } from "ethers"
import { ALCHEMY_API_KEY_MAINNET } from './constants.js';

const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY_MAINNET}`;

async function inspectBlocks(){
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  const blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);
  const previousBlock = await provider.getBlock(blockNumber - 1);
  console.log(`Getting previous block: ${blockNumber - 1}`)
  console.log(previousBlock);
  const latestBlock = await provider.getBlock(blockNumber);
  console.log(`Getting latest block: ${blockNumber}`)
  console.log(latestBlock);

  console.log(`Previous block's hash ${previousBlock.hash} is the parent hash of the latest block ${latestBlock.parentHash}`)

  const getBlockWithTransactions = await provider.getBlockWithTransactions(blockNumber);
  console.log('First transaction in the latest block:')
  console.log(getBlockWithTransactions.transactions[0]);

}
inspectBlocks();
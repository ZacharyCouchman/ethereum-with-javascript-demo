import { ethers } from 'ethers';
import { formatUnits } from 'ethers/lib/utils.js';
import { ALCHEMY_API_KEY_MAINNET } from './constants.js';

const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY_MAINNET}`;

const imxERC20TokenAddress = "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF";

const contractABI = [
  "function name() public view returns (string memory)",
  "function symbol() public view returns (string memory)",
  "function decimals() public view returns (uint8)",
  "function balanceOf(address account) external view returns (uint256)",
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];

async function listenToEvents() {
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  const contract = new ethers.Contract(imxERC20TokenAddress, contractABI, provider);

  const filter = contract.filters.Transfer();
  // query all IMX transfer events in the last 200 blocks
  const events = await contract.queryFilter(filter, provider.blockNumber - 200, provider.blockNumber);

  const logTransfer = (event) => console.log(`${event.args.from} transferred ${formatUnits(event.args.value, 18)} IMX to ${event.args.to}`);
  events.forEach(logTransfer);
}
listenToEvents();
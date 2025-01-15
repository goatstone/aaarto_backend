/** 
 * Use environment variables to provide arguments 
 * export contractAddress=""
 * export account=""
 * Run the script with hardhat run 
 * npx hardhat run scripts/getBalance.ts --network sepolia 
 */
import { ethers } from "hardhat";

async function getBalance(contractAddress: string, account: string) {
  const GLDToken = await ethers.getContractFactory("GLDToken");
  const token = GLDToken.attach(contractAddress);

  const balance = await token.balanceOf(account);
  console.log(`Balance of ${account}: ${ethers.utils.formatUnits(balance, 18)} GLD`);
}

const contractAddress = process.env.contractAddress as string;
const account = process.env.account as string;

getBalance(contractAddress, account)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

require("dotenv").config({ path: ".env" });
const { ethers } = require('ethers');
const API_KEY = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const contract = require("../artifacts/contracts/Contract.sol/Contract.json");

const provider = new ethers.AlchemyProvider("goerli", API_KEY);;

const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const faucetContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
   const balance = await faucetContract.balanceOf(signer.getAddress());
   const decimal = 1000000000000000000;
   const balanceRemain = BigInt(balance)/ BigInt(decimal);
  console.log("The balance is: ", balanceRemain);
  console.log("Faucet is Incomming .... Updating the Balance... Hold Tight ...");
  const tx = await faucetContract.faucet();
  const receipt = await tx.wait();
  
  if(receipt.status === 1) {
    const newBalance = await faucetContract.balanceOf(signer.getAddress());
    //Print the new balance
    const newRemain = BigInt(newBalance)/BigInt(decimal);
    console.log("New balance:", newRemain);
  } else {
    alert("Transaction failed! Please try again");
  }
  

}

main();
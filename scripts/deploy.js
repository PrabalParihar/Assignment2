
const hre = require("hardhat");

async function main() {

  const Contract = await hre.ethers.deployContract("Contract");

  await Contract.waitForDeployment();

  console.log(
    `deployed to ${Contract.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

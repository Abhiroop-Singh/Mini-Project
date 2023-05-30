const hre = require("hardhat");
async function getBalances(address) {
    const balanceBigInt = await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
  }
async function main() {
    const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  
    const BigNumber = ethers.BigNumber;
    const biddingTime = 8640;
    // const value = ethers.utils.parseEther("0.008"); 
    
    const bidder = await ethers.getContractFactory("Bidder");
    // const contract = await bidder.deploy(biddingTime, { value: value });
    const contract = await bidder.deploy(biddingTime);
    await contract.deployed();
    console.log(String(contract.address))
    console.log(await getBalances(contract.address))
    
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

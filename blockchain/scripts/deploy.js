const hre = require("hardhat");
async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function cosoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}
async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;
    console.log(
      `At ${timestamp},name ${name},address ${from},message ${message}`
    );
  }
}
async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();

  const BigNumber = ethers.BigNumber;
  const biddingTime = 8640; // seconds
  const value = ethers.utils.parseEther("801"); // convert to BigNumber
  
  const bidder = await ethers.getContractFactory("Bidder");
  const contract = await bidder.deploy(biddingTime, { value: value });







  await contract.deployed();
  console.log("Address of contract:", String(contract.address));
  console.log("balance of contract ",await getBalances(contract.address))

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before");
  await cosoleBalances(addresses);

  const amount1 = ethers.utils.parseEther('600');
  const amount2 = ethers.utils.parseEther('701');
  const amount3 = ethers.utils.parseEther('500');
  await contract.connect(from1).placeBid(amount1);
  await contract.connect(from2).placeBid(amount2);
  await contract.connect(from3).placeBid(amount3);

  console.log("After");
  await cosoleBalances(addresses);
  console.log("auction ended")
  await contract.connect(owner).endAuction()
  console.log("balance of contract ",await getBalances(contract.address))
  console.log("after auction ends")
  await cosoleBalances(addresses);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
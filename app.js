const { Contract, Wallet } = require("ethers");
const {
  ZeroDevEthersProvider,
  convertEthersSignerToAccountSigner,
} = require("@zerodev/sdk");
const { PrivateKeySigner } = require("@alchemy/aa-core");

// Make sure to set the environment variables
const projectId = "523a76ee-00e1-41c6-8606-c1367ce20c9b";
const owner = new Wallet(
  "0xcfaae7c6a398a857778983b8ce08d7f2df91f3dd4854a88f13dd3d26c96b2f12"
);

const contractAddress = "0x34bE7f35132E97915633BC1fc020364EA5134863";
const contractABI = [
  "function mint(address _to) public",
  "function balanceOf(address owner) external view returns (uint256 balance)",
];

const main = async () => {
  // Use the function `ZeroDevEthersProvider` to create an Ethers provider
  const provider = await ZeroDevEthersProvider.init("ECDSA", {
    projectId,
    // Convert an Ethers signer so it's compatible with our SDK
    owner: convertEthersSignerToAccountSigner(owner),
  });

  // Get the signer from the Ethers provider
  const signer = provider.getAccountSigner();
  //console.log(signer);
  const address = await signer.getAddress();
  console.log(`My address: ${address}`);

  const nftContract = new Contract(contractAddress, contractABI, signer);

  const receipt = await nftContract.mint(address);
  //await receipt.wait();
  console.log(`NFT balance: ${await nftContract.balanceOf(address)}`);
};

main().then(() => process.exit(0));



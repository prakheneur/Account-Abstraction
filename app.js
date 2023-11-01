
const { ECDSAProvider } = require('@zerodev/sdk')
const { LocalAccountSigner } = require("@alchemy/aa-core")
const { encodeFunctionData, parseAbi, createPublicClient, http } = require('viem')
const { polygonMumbai } = require('viem/chains')
const PRIVATE_KEY="Generate your private key and use";
const PROJECT_ID="create a project id at zerodev dashboard";
if (!PRIVATE_KEY || !PROJECT_ID) {
  console.log('Please set private key and project ID as environment variables')
  process.exit(1)
}

// ZeroDev Project ID
const projectId = PROJECT_ID

// The "owner" of the AA wallet, which in this case is a private key
const owner = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY)

//the contract deployed
const contractAddress = 'ADDress where the solidity contract is saved'
const contractABI = parseAbi([
  // 'function claimTokens(uint amount) external',
  // 'function unfollow() external',
  // 'function getBalance(address user) public view returns (uint)',
  // 'function follow() external'
  "import fucnctions to access then"
])


const publicClient = createPublicClient({
  chain: polygonMumbai,
  transport: http('https://polygon-mumbai.infura.io/v3/f36f7f706a58477884ce6fe89165666c'),
})



const main = async () => {
    // Create the AA wallet
    const ecdsaProvider = await ECDSAProvider.init({
      projectId,
      owner,
      opts: {
        paymasterConfig: {
          policy: "TOKEN_PAYMASTER",
          gasToken: "USDC",
        }}
    })
    const address = await ecdsaProvider.getAddress()
    console.log('My address:', address)
 //.............................................................................................................................. 
    //follow the client
    // const followResult = await ecdsaProvider.sendUserOperation({
    //   target: contractAddress,
    //   data: encodeFunctionData({
    //     abi: contractABI,
    //     functionName: 'follow',
    //     args: [],
    //   }),
    // })
    // await ecdsaProvider.waitForUserOperationTransaction(followResult.hash)
    // console.log("Followed the account")
//.............................................................................................................................. 
    
    // Claim the tokens
    // const claimResult = await ecdsaProvider.sendUserOperation({
    //   target: contractAddress,
    //   data: encodeFunctionData({
    //     abi: contractABI,
    //     functionName: 'claimTokens',
    //     args: [500,],
    //   }),
    // })
    // await ecdsaProvider.waitForUserOperationTransaction(claimResult.hash)
    // console.log("Token claimed")
//.............................................................................................................................. 

    // const balancebeforeUnfollow = await publicClient.readContract({
    //     address: contractAddress,
    //     abi: contractABI,
    //     functionName: 'getBalance',
    //     args: [address],
    //   })
    //   console.log("Balance before unfollowing:", balancebeforeUnfollow)

//.............................................................................................................................. 
    
    // Unfollow the contract
    // const unfollowResult = await ecdsaProvider.sendUserOperation({
    //   target: contractAddress,
    //   data: encodeFunctionData({
    //     abi: contractABI,
    //     functionName: 'unfollow',
    //     args: [],
    //   }),
    // })
    // await ecdsaProvider.waitForUserOperationTransaction(unfollowResult.hash)
    // console.log("Unfollowed")

//.............................................................................................................................. 

  // Check balance after unfollowing
  //   const balanceAfterUnfollow = await publicClient.readContract({
  //     address: contractAddress,
  //     abi: contractABI,
  //     functionName: 'getBalance',
  //     args: [address],
  //   })
  //   console.log("Balance after unfollowing:", balanceAfterUnfollow)
//.............................................................................................................................. 
  }

  
  main().then(() => process.exit(0))

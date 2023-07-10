const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/Contracts/ProcessRecord.sol/ProcessRecord.json");

//Provider (site where the webapp is created)
const provider = new ethers.providers.InfuraProvider("sepolia", API_KEY);

//Signer (Client)
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

//Contract
const processContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function ReadLastRecord(){
    const currentRecord = await processContract.record();
    console.log("The last record is: " + currentRecord);
}

async function main(){
    var currentTime = new Date().getTime();
    const currentTrans = await processContract.updateRecord(""+currentTime);
    ReadLastRecord();
    currentTrans.wait();
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
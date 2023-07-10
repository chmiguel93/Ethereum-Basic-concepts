async function main(){
    const contractProcess = await ethers.getContractFactory("ProcessRecord");

    const processRecord = await contractProcess.deploy("Base node message");
    console.log("Contract deployed at: " + processRecord.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
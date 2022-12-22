const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.GANACHE_URL));

const solc = require("solc");
const fs = require("fs");

const demoFile = fs.readFileSync("demo.sol", "utf-8").toString();

// const Contract = require('web3-eth-contract');
// Contract.setProvider(process.env.GANACHE_URL);

// web3.eth.getBalance('process.env.ADDRESS).then(console.log);

// web3.eth.getBalance('process.env.ADDRESS).then(result => {
// console.log(web3.utils.fromWei(result, 'ether'));
// });

// web3.eth.sendTransaction({
//     from: 'process.env.ADDRESS,
//     do: '0x8d6c2CC712F766504C3b15ee425BE12Bf69ef702',
//     value: web3.utils.toWei('10', 'ether')
// }).then(result => {
//     console.log(result.transactionHash)
// });

// const demoContract = new web3.eth.Contract([{
//         "constant": false,
//         "inputs": [{
//             "internalType": "uint256",
//             "name": "_num",
//             "type": "uint256"
//         }],
//         "name": "setNumber",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "num",
//         "outputs": [{
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     }
// ], '0xF7F7ae6552DF391e80E0e46CEf0F71C085004fb8');

// const demoContract = new Contract([{
//         "constant": false,
//         "inputs": [{
//             "internalType": "uint256",
//             "name": "_num",
//             "type": "uint256"
//         }],
//         "name": "setNumber",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "num",
//         "outputs": [{
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//         }],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     }
// ], '0xF7F7ae6552DF391e80E0e46CEf0F71C085004fb8');

// demoContract.methods.num().call().then(console.log);

// demoContract.methods.setNumber(100).send({
//     from: 'process.env.ADDRESS
// }).then(result => {
//     console.log(result);
// });

// demoContract.methods.num().call().then(console.log);

// console.log(demoFile);

// var contractInput = {
//     language: 'Solidity',
//     sources: {
//         'demo.sol': {
//             content: demoFile,
//         },
//     },

//     settings: {
//         outputSelection: {
//             '*': {
//                 '*': ['*'],
//             }
//         },
//     },
// };

// const contractOutput = JSON.parse(solc.compile(JSON.stringify(contractInput)));
// console.log(contractOutput);
// const ABI = contractOutput.contracts['demo.sol']['demo'].abi;
// const byteCode = contractOutput.contracts['demo.sol']['demo'].evm.bytecode.object;

// console.log('ABI', ABI);
// console.log('byteCode', byteCode);

// contract = new web3.eth.Contract(ABI);

// let defaultAcount;

// web3.eth.getAccounts().then(result => {
//     console.log('Default Accounts', result);
//     defaultAcount = result[0];
//     console.log('Default Account', defaultAcount);

//     contract.deploy({ data: byteCode })
//         .send({ from: defaultAcount, gas: 500000 })
//         .on('receipt', (receipt) => {
//             console.log('Contract Address:', receipt.contractAddress);
//         })
//         .then(demoContract => {
//             demoContract.methods.num().call((err, result) => {

//                 console.log('Initial Value: ',
//                     result)

//                 demoContract.methods.setNumber(100).send({
//                     from: defaultAcount
//                 }).then(result => {
//                     console.log(result);
//                 });
//             });
//         });
// });

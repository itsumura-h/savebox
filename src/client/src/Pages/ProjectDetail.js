import React, { Component, useState, useEffect } from 'react';
import getWeb3 from '../getWeb3';
import SimpleStorageContract from '../contracts/SimpleStorage.json';

const ProjectDetail = () => {
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);
  const [storageValue, setStorageValue] = useState(0);
  const [web3, setWeb3] = useState(null);
  const [accouts, setAccouts] = useState(null);

  useEffect(() => {
    async function connectMetamask() {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        console.log('web3: ', web3);
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        console.log('accounts: ', accounts);
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();

        const deployedNetwork = SimpleStorageContract.networks[networkId];
        const instance = new web3.eth.Contract(
          SimpleStorageContract.abi,
          deployedNetwork && deployedNetwork.address
        );
        console.log('instance: ', instance);
        setWeb3(web3);
        setAccounts(accounts);
        setContract(instance);
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    }

    connectMetamask();
  }, []);

  function saveMoney(user, amount) {
    console.log('start save money..');
    var abi = [
      {
        constant: false,
        inputs: [],
        name: 'SaveMoney',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
    ];

    var address = '0x23db62344f40fc356sfcba267514270e60eed82fd';

    var contract = web3.eth.contract(abi).at(address);

    web3.eth.getAccounts(function (error, result) {
      contract.BuyItem(
        {
          from: result[0],
          value: web3.fromWei(1, 'ether'),
        },
        function (err, transactionHash) {
          console.log(err, transactionHash);
        }
      );
    });
  }

  return (
    <div>
      <h1>porjects name</h1>
      <p>project.summary</p>
      <p>project.targetAmount</p>
      <p>project.savingAmount</p>
      <button onClick={saveMoney}>貯金する</button>
    </div>
  );
};

export default ProjectDetail;

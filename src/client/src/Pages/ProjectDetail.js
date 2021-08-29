import React, { Component, useState, useEffect } from 'react';
import getWeb3 from '../getWeb3';
import JPYC_Example from '../contracts/JPYC_Example.json';

const ProjectDetail = () => {
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState();
  const [storageValue, setStorageValue] = useState(0);
  const [web3, setWeb3] = useState(null);
  const [accouts, setAccouts] = useState(null);
  const [jpycAmount, setJpycAmount] = useState(null);

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

        const deployedNetwork = JPYC_Example.networks[networkId];
        const instance = new web3.eth.Contract(
          JPYC_Example.abi,
          // SimpleStorageContract.abi,
          // deployedNetwork && deployedNetwork.address
        );
        instance.options.address = "0xCF83A8168e7D7621985AC47D742C670660cD99FA"

        console.log('instance: ', instance);
        console.log('instance.methods: ', instance.methods)
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

  function saveMoney(){
    console.log('start save money..');
  }

  function getJpycAmount() {
    contract.methods.jpycAmount()
    .call()
      .then(result => {
        // do stuff with returned values
        console.log('result', result)
        setJpycAmount(result)
      }
    )
  }

  return (
    <div>
      <h1>porjects name</h1>
      <p>project.summary</p>
      <p>project.targetAmount</p>
      <p>project.savingAmount</p>
      <button onClick={() => saveMoney(contract, accounts)}>貯金する</button>      
      <button onClick={() => getJpycAmount(contract)}>貯金額を確認する</button>
      <p>貯金総額：{jpycAmount}</p>
    </div>
  );
};

export default ProjectDetail;

import React, { Component, useState, useEffect } from "react";
import getWeb3 from "../getWeb3";
import SimpleStorageContract from "../contracts/SimpleStorage.json";


const PorjectIndex=()=>{
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);
  const [storageValue, setStorageValue] = useState(0);
  const [web3, setWeb3] = useState(null)
  const [accouts, setAccouts] = useState(null)

  const runExample = async () => {
    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });
    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();
    // Update state with the result.
    setStorageValue(response)
  };

  useEffect(() => {
    async function connectMetamask() {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        console.log('web3: %d', web3)
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        console.log('accounts: %d', accounts)
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
  
        const deployedNetwork = SimpleStorageContract.networks[networkId];
        const instance = new web3.eth.Contract(
          SimpleStorageContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        console.log('instance: %d', instance)
  
  
        // const deployedNetwork = Savebox.networks[networkId];
        // const instance = new web3.eth.Contract(
        //   Savebox.abi,
        //   deployedNetwork && deployedNetwork.address,
        // );
        // console.log(deployedNetwork.address) Cannot read property 'address' of undefined
        // instance.options.address = "0x2370f9d504c7a6E775bf6E14B3F12846b594cD53"
  
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        // this.setState({ web3, accounts, contract: instance });
        setWeb3(web3);
        setAccounts(accounts);
        setContract(instance);
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    }
    connectMetamask()
  }, [])

  return (
    <div>
      <h1>porjects</h1>
    </div>
  )
}
export default PorjectIndex;
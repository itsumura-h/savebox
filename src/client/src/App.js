import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import Savebox from "./contracts/JPYC_Example.json";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PorjectIndex from './Pages/ProjectIndex';
import ProjectDetail from './Pages/ProjectDetail';
import PorjectDevidends from './Pages/PorjectDevidends';

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={PorjectIndex}/>
        <Route path='/dividends' exact component={PorjectDevidends}/>
        <Route path='/:id' exact component={ProjectDetail}/>
      </Switch>
    </Router>
  )
}
export default App;

// class App extends Component {
//   state = { storageValue: 0, web3: null, accounts: null, contract: null, name:'' };

//   componentDidMount = async () => {
//     try {
//       // Get network provider and web3 instance.
//       const web3 = await getWeb3();

//       // Use web3 to get the user's accounts.
//       const accounts = await web3.eth.getAccounts();

//       // Get the contract instance.
//       const networkId = await web3.eth.net.getId();

//       const deployedNetwork = SimpleStorageContract.networks[networkId];
//       const instance = new web3.eth.Contract(
//         SimpleStorageContract.abi,
//         deployedNetwork && deployedNetwork.address,
//       );

//       // const deployedNetwork = Savebox.networks[networkId];
//       // const instance = new web3.eth.Contract(
//       //   Savebox.abi,
//       //   deployedNetwork && deployedNetwork.address,
//       // );
//       // console.log(deployedNetwork.address) Cannot read property 'address' of undefined
//       // instance.options.address = "0x2370f9d504c7a6E775bf6E14B3F12846b594cD53"

//       // Set web3, accounts, and contract to the state, and then proceed with an
//       // example of interacting with the contract's methods.
//       this.setState({ web3, accounts, contract: instance }, this.runExample);
//       // this.setState({ web3, accounts, contract: instance });
//     } catch (error) {
//       // Catch any errors for any of the above operations.
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`,
//       );
//       console.error(error);
//     }
//   };

//   runExample = async () => {
//     const { accounts, contract } = this.state;

//     // Stores a given value, 5 by default.
//     await contract.methods.set(5).send({ from: accounts[0] });

//     // Get the value from the contract to prove it worked.
//     const response = await contract.methods.get().call();

//     // Update state with the result.
//     this.setState({ storageValue: response });
//   };

//   getName=async()=>{
//     const { _, contract } = this.state;
//     const name = await contract.methods.getname().call()
//     console.log(name)
//     this.setState({name:name})
//   }

//   render() {
//     if (!this.state.web3) {
//       return <div>Loading Web3, accounts, and contract...</div>;
//     }
//     return (
//       <div className="App">
//         {/* <div>
//           <h1>SaveBox</h1>
//           <button onClick={this.getName}>名前</button>
//           <p>{this.state.name}</p>
//         </div> */}
//         <h1>Good to Go!</h1>
//         <p>Your Truffle Box is installed and ready.</p>
//         <h2>Smart Contract Example</h2>
//         <p>
//           If your contracts compiled and migrated successfully, below will show
//           a stored value of 5 (by default).
//         </p>
//         <p>
//           Try changing the value stored on <strong>line 42</strong> of App.js.
//         </p>
//         <div>The stored value is: {this.state.storageValue}</div>
//       </div>
//     );
//   }
// }

// export default App;

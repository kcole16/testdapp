import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var peopleABI = [ { constant: true,
  inputs: [],
  name: 'getPeople',
  outputs: [ [Object], [Object], [Object] ],
  payable: false,
  type: 'function' },
{ constant: false,
  inputs: [ [Object], [Object], [Object] ],
  name: 'addPerson',
  outputs: [ [Object] ],
  payable: false,
  type: 'function' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'people',
  outputs: [ [Object], [Object], [Object] ],
  payable: false,
  type: 'function' } ]

var peopleContractAddress = '0x2d12edb9cbfc74f915c60eea6992306f1110aaf3'
var peopleContract = ETHEREUM_CLIENT.eth.contract(peopleABI).at(peopleContractAddress)

class App extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

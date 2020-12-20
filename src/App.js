import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  constructor(props) {
    super(props);
    // let info = Auth.currentUserInfo();
    // console.log(info);
    info.username = "max";
    this.state = {
      name : info.username,
    } ;
  }
  
  async componentDidMount() {
     const info = await Auth.currentUserInfo()
     console.log('Returned info: ', info)
     this.setState({ info })
   }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey (1) {this.state.name} (2) {this.state.username} (3) {this.state.info.username} edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);

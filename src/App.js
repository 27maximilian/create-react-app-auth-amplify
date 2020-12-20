import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  
  state = {
    info: null,
    name: "max",
  };
  
  /*
  constructor(props) {
    super(props);
    let info = Auth.currentUserInfo();
    this.state = {
      name : "max" //info.username,
    } ;
  }
  */

  componentDidMount() {
    this._asyncRequest = Auth.currentUserInfo().then(
      info => {
        this._asyncRequest = null;
        this.setState({info});
      }
    );
  }
  
  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey {this.state.info.username} edit <code>src/App.js</code> and save to reload.
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

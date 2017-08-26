import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "Microsoft?",
      intent: "none"
    };
  }
  
  componentDidMount() {
    fetch(`https://luis-proxy.azurewebsites.net/api/HttpTriggerCSharp1?code=frYvHpy1/zSHOulYI3YHBLjBPzelfND4YD/GL6u3axD6hMkBfT88xA==&query=${this.state.query}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ intent: JSON.parse(json).topScoringIntent.intent });
      })
      .then(() => {
        console.log(this.state.intent);
      });
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

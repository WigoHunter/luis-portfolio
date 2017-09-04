import React, { Component } from 'react';
import './App.css';

import LUISWrap from './LUISWrap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LUISWrap
          luisUrl="https://luis-proxy.azurewebsites.net/api/HttpTriggerCSharp1?code=frYvHpy1/zSHOulYI3YHBLjBPzelfND4YD/GL6u3axD6hMkBfT88xA==&query="
          intents={["WhatDidYouDo", "WhatDidYouLearn"]}
        >
          <p className="pull-right">Hello World</p>
        </LUISWrap>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import LUISWrap from './LUISWrap.js';
import LUISComponent from './LUISComponent.js';
import Header from './Header.js';
import Navbar from './Nav.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intent: "default",
      company: "",
      openChat: false,
      openNav: false,
    }

    this.toggleChat = this.toggleChat.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  setLUISState(states) {
    this.setState(states);
  }

  toggleChat() {
    this.setState({
      openChat: !this.state.openChat
    });
  }

  toggleNav() {
    this.setState({
      openNav: !this.state.openNav
    });
  }

  render() {
    return (
      <div className={`App  ${this.state.openNav && "tilt"}`}>
        <div className="toggle" onClick={() => this.toggleNav()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Navbar list={[
            "Home",
            "Experiences",
            "Personal"
          ]}
          open={this.state.openNav}
        />
        <Header
          backgrounds={[
            "/img1.JPG",
            "/img2.JPG",
            "/img3.JPG",
            "/img4.JPG"
          ]}
          toggleChat={this.toggleChat}
        />
        <LUISWrap
          luisUrl="https://luis-proxy.azurewebsites.net/api/HttpTriggerCSharp1?code=frYvHpy1/zSHOulYI3YHBLjBPzelfND4YD/GL6u3axD6hMkBfT88xA==&query="
          intents={["WhatDidYouDo", "WhatDidYouLearn"]}
          openChat={this.state.openChat}
          toggleChat={this.toggleChat}
        >
        </LUISWrap>
      </div>
    );
  }
}

export default App;
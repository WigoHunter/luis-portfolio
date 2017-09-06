import React, { Component } from 'react';
import './App.css';

import LUISWrap from './LUISWrap.js';
import LUISComponent from './LUISComponent.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intent: "default",
      company: "",
      index: 0,
    }

    this.setLUISState = this.setLUISState.bind(this);
  }

  setLUISState(states) {
    this.setState(states);
  }

  componentDidMount() {
    window.clearInterval();

    let interval = setInterval(() => {
      this.setState({
        index: this.state.index === 3 ? 0 : this.state.index + 1
      });
    }, 8000);
  }

  render() {
    const backgrounds = [
      "/img1.JPG",
      "/img2.JPG",
      "/img3.JPG",
      "/img4.JPG"
    ];

    return (
      <div className="App">
        <div
          className="header"
          style={{
            background: `url(${backgrounds[this.state.index]}) center center / cover`
          }}
        >
          <div className="overlay"></div>
          <div className="profile">
            <div className="pic" style={{ background: "url(/me.jpeg) center center / cover" }}></div>
            <h2>Kevin Hsu</h2>
            {/*<h4>Software Engineer Intern at <span>Microsoft</span> | Final Year Student at <span>HKU</span></h4>*/}
            <p className="subtitle">Software Engineer | Tech Blogger | Student</p>
            <div className="line"></div>
            <p>
              Not the normal portfolio page you've seen.
            </p>
            <p>You can, quite literally, <span onClick={() => {}}>TALK</span> to this website.</p>
          
            <div className="links">
              <a href="https://medium.com/@kevin.wcb" rel="noopener noreferrer" target="_blank"><i className="fa fa-medium"></i></a>
              <a href="https://www.linkedin.com/in/kai-chun-kevin-hsu-5428bbb4/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href="https://twitter.com/kevhs_pj" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
              <a href="https://www.facebook.com/kevinwigohsu" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
              
            </div>
          </div>
        </div>

        <LUISWrap
          luisUrl="https://luis-proxy.azurewebsites.net/api/HttpTriggerCSharp1?code=frYvHpy1/zSHOulYI3YHBLjBPzelfND4YD/GL6u3axD6hMkBfT88xA==&query="
          intents={["WhatDidYouDo", "WhatDidYouLearn"]}
        >
        </LUISWrap>
      </div>
    );
  }
}

export default App;

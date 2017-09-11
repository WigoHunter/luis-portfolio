import React, { Component } from 'react';
import './App.css';

import LUISWrap from './LUISWrap.js';
import LUISComponent from './LUISComponent.js';
import Header from './Header.js';
import Navbar from './Nav.js';
import Image from './Image.js';

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
      <div className="App">
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
          toggle={this.toggleNav}
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
          <div className="container reminder">
            <h2>Let me remind you once more. <span>You can really talk to this website.</span></h2>
            <p>Feel free to ask it any question.</p>
            <p>It will respond with a new layout and contents that suit your interests.</p>
          </div>
          <div className="container me">
            <h2>About me</h2>
            <h3>Beloved Family. Close Friends. Supportive Girlfriend.</h3>
            <div className="row">
              <Image src="/family.jpg" height="220px" width="320px"  />
              <Image src="/friends.jpg" height="220px" width="320px" />
              <Image src="/gf.jpg" height="220px" width="320px" />
            </div>
            <p>
              I am currently a Final Year student at the University of Hong Kong. I was born and raised in Taiwan and came to Hong Kong to study Business, but then once I started to work on my own projects, I am overwhelmed by how fun and exciting technologies are today. I later declared my second major in Computer Science and joined <a href="http://appslab.hk/" target="_blank">CityU Apps Lab</a> to develop a Dropbox clone with Meteor.
            </p>

            <p>
              Then I intiated a student project, <a href="http://projectable.hk/profile/id/kevin-hsu" target="_blank">Projectable</a>, to make University students in Hong Kong more connected in terms of project developments. For example, Business students can find partners in Computer Science to turn ideas into projects. Meanwhile, I have also been active in various developer communities in Hong Kong, including speaking at <a href="http://hk.sitcon.org/" target="_blank">SITCON HK</a> 2017 to share about React and Meteor, and organized <a href="http://ecjamming.tech/" target="_blank">E.C. Jamming</a>, one of the "<a href="http://get.tech/blog/10-mind-blowing-student-hackathons-from-around-the-world/" target="_blank">Top 10 Mind Blowing Student Hackathons From Around the World</a>", with sponsorships from Microsoft, GitHub, dotTech and local startups. The hackthon later led me to the amazing summer software engineer internship at Microsoft in 2017.
            </p>

            <p>
              I love programming, and really want to spread the joyfulness to more students by contributing to shape a more friendly and encouraging world.
            </p>

            <p>
              That is my long term vision. And for now, I am looking for opportunities in the US. I am currently applying for graduate programs in Computer Science or HCI in the States, and hopefully will join another competitive workplace in 2018 as an intern or a FTE after graduation.
            </p>
          </div>
        </LUISWrap>
      </div>
    );
  }
}

export default App;
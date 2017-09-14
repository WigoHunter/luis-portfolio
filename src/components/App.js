import React, { Component } from 'react';
import './App.css';

import LUISWrap from './LUISWrap.js';
import LUISComponent from './LUISComponent.js';
import Header from './Header.js';
import Menu from './Menu.js';
import Image from './Image.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intent: "default",
      company: "",
      openChat: false,
      openMenu: false,
    }

    this.toggleChat = this.toggleChat.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  setLUISState(states) {
    this.setState(states);
  }

  toggleChat() {
    this.setState({
      openChat: !this.state.openChat
    });
  }

  toggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    });
  }

  render() {
    return (
      <div className="App">
        {/*<Navbar list={[
            "Home",
            "Experiences",
            "Personal"
          ]}
          open={this.state.openNav}
          toggle={this.toggleNav}
        />*/}
        <Menu
          open={this.state.openMenu}
          toggleMenu={this.toggleMenu}
        />
        <Header
          backgrounds={[
            "/img1.JPG",
            "/img2.JPG",
            "/img3.JPG",
            "/img4.JPG"
          ]}
          toggleChat={this.toggleChat}
          openMenu={this.state.openMenu}
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
            <h2 className="sec-title">About me</h2>
            <h3>Beloved Family. Close Friends. Supportive Girlfriend.</h3>
            <div className="row">
              <Image src="/family.jpg" height="220px" width="320px"  />
              <Image src="/friends.jpg" height="220px" width="320px" />
              <Image src="/gf.jpg" height="220px" width="320px" />
            </div>

            <p>
              I am Kevin from Taiwan, currently a Final Year student at the University of Hong Kong with double majors in Computer Science and Business. 
            </p>

            <p>
              I am always into the community side of Computer Science and currently lead a student project, <a href="http://projectable.hk/profile/id/kevin-hsu" target="_blank">Projectable</a>, to make University students in Hong Kong more connected in terms of project developments. Meanwhile, I have also been active in various developer communities in Hong Kong, including speaking at <a href="http://hk.sitcon.org/" target="_blank">SITCON HK</a> 2017 to share about React and Meteor, and organized <a href="http://ecjamming.tech/" target="_blank">E.C. Jamming</a>, one of the "<a href="http://get.tech/blog/10-mind-blowing-student-hackathons-from-around-the-world/" target="_blank">Top 10 Mind Blowing Student Hackathons From Around the World</a>", with sponsorships from Microsoft, GitHub, dotTech and local startups.
            </p>

            <p>
              The hackathon later led me to the amazing summer software engineer internship at <a href="https://hackernoon.com/thank-you-microsoft-for-the-amazing-software-engineer-internship-407a49b8f816" target="_blank">Microsoft</a> in 2017.
            </p>

            <p>
              I am looking for opportunities in the US. I am currently applying for graduate programs in Computer Science or HCI in the States and hopefully will join another competitive workplace in 2018 as an intern or an FTE after graduation.
            </p>
          </div>

          <div className="container experiences">
            <h2 className="sec-title">Experiences</h2>
            <div className="timeline">
              <div className="exp">
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="content">
                  <Image src="/ms-logo.png" height="20px" width="90px" />
                  <h3>Software Engineer Intern</h3>
                  <p className="time">Jun - Sep / 2017</p>
                  <p className="info">
                    Developed a multi-threading internal application for the Geocoding team to parse and visualize geocoding data for more efficient debugging, testing and benchmarking.
                  </p>
                  {/*<ul>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>Asp.Net</li>
                  </ul>*/}
                </div>
              </div>

              <div className="exp">
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="content">
                  <h3>Co-Founder & Full-Stack Developer</h3>
                  <p className="company">@ <a href="http://projectable.hk/profile/id/kevin-hsu" target="_blank">Projectable.hk</a> <span>(private beta)</span></p>
                  <p className="time">Sep / 2016 - Now</p>
                  <p className="info">
                    Leading a team of developers and a designer working on a talent marketplace for University students to team up on projects, using React and Meteor.  
                  </p>
                </div>
              </div>

              <div className="exp">
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="content">
                  <h3>Hackathon Organizor</h3>
                  <p className="company">@ <a href="http://ecjamming.tech/" target="_blank">ECJamming.tech</a></p>
                  <p className="time">Jan - Mar / 2017</p>
                  <p className="info">
                    Initiated and organized a student hackathon in Hong Kong and acquired sponsorships from Microsoft, GitHub, Make School, dotTech and local startup communities.
                  </p>
                </div>
              </div>

              <div className="exp">
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="content">
                  <h3>Frontend Developer Intern</h3>
                  <p className="company">@ <a href="https://25sprout.com/" target="_blank">25Sprout</a></p>
                  <p className="time">Jul - Aug / 2016</p>
                  <p className="info">
                    Worked at the award-winning startup, 25sprout, developing E-Commerce websites using cutting edge technologies including React, Redux, ES6, Webpack, etc.
                  </p>
                </div>
              </div> 
            </div>
          </div>

          <div className="container projects">
            <h2 className="sec-title">Projects</h2>
            <div className="row">
              <div className="block">
                <div className="content">
                  <div className="info">
                    <h3>SITCON x HK</h3>
                    <p className="title">Speaker</p>
                    <p className="more">Show Me More</p>
                  </div>
                  <img src="./sitcon.jpeg" />
                </div>
              </div>
              <div className="block">
                <div className="content">
                  <div className="info">
                    <h3>BingGC UX</h3>
                    <p className="title">Software Engineer Intern</p>
                    <p className="more">Show Me More</p>
                  </div>
                  <img src="./binggc.png" />
                </div>
              </div>
              <div className="block">
                <div className="content">
                  <div className="info">
                    <h3>Projectable</h3>
                    <p className="title">Co-Founder</p>
                    <p className="more">Show Me More</p>
                  </div>
                  <img src="./pj.png" />
                </div>
              </div>
              <div className="block">
                <div className="content">
                  <div className="info">
                    <h3>E.C. Jamming</h3>
                    <p className="title">Hackathon Organizor</p>
                    <p className="more">Show Me More</p>
                  </div>
                  <img src="./ecj.jpg" />
                </div>
              </div>
            </div>

            <div className="row">
              <p>... Interested in something else? <span>Why not talk to Mr. ChatWeb</span></p>
              <ul>
                <li>How was your academic exchange at University of Toronto?</li>
                <li>How did you spend your first summer?</li>
                <li>What did you do in the AIESEC exchange to Budapest?</li>
                <li>What is your next steps?</li>
              </ul>
            </div>
          </div>

          <div className="container blogs">
            <h2 className="sec-title">Blogs</h2>
            <h3 className="following">Really treats blogging seriously. I love writing and sharing.</h3>
          </div>
        </LUISWrap>
      </div>
    );
  }
}

export default App;
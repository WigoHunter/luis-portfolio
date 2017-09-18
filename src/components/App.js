import React, { Component } from 'react';
import './App.css';

import LUISWrap from './LUISWrap.js';
// import LUISComponent from './LUISComponent.js';
import Header from './Header.js';
import Menu from './Menu.js';
import Image from './Image.js';
import Timeline, { TimelineItem } from './Timeline.js';
import Project from './Project.js';
import Blog from './Blog.js';

import data from './db/data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      intent: "default",
      company: "",
      openChat: false,
      openMenu: false,
      projectFocused: false,
      // Use Redux for this part later
      projects: [{
          name: "SITCON x HK",
          title: "Speaker",
          img: "./sitcon.jpeg",
        }, {
          name: "BingGC UX",
          title: "Software Engineer Intern",
          img: "./binggc.png",
        }, {
          name: "Projectable",
          title: "Co-Founder",
          img: "./pj.png",
        }, {
          name: "E.C. Jamming",
          title: "Hackathon Organizor",
          img: "./ecj.jpg",
        }
      ],
      conversations: [
        "How was your academic exchange at University of Toronto?",
        "How did you spend your first summer?",
        "What did you do in the AIESEC exchange to Budapest?",
        "What is your next steps?"
      ]
    }

    this.toggleChat = this.toggleChat.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.setFocusOnProject = this.setFocusOnProject.bind(this);
    this.unSetFocusOnProject = this.unSetFocusOnProject.bind(this);
    this.chat = this.chat.bind(this);
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

  setFocusOnProject(name) {
    let projectList = [];
    
    for (let i = 0; i < this.state.projects.length; i++) {
      this.state.projects[i].name === name
        ? projectList.unshift(this.state.projects[i])
        : projectList.push(this.state.projects[i])
    }

    this.setState({
      projects: projectList,
      projectFocused: true
    });
  }

  unSetFocusOnProject() {
    this.setState({
      projectFocused: false
    });
  }

  chat(msg) {
    this.refs.luis.updateQuery(msg);

    this.setState({
      openChat: true
    });
  }

  render() {
    return (
      <div className="App">
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
          ref="luis"
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
              I am always into the community side of Computer Science and currently lead a student project, <a href="http://projectable.hk/profile/id/kevin-hsu" target="_blank" rel="noopener noreferrer">Projectable</a>, to make University students in Hong Kong more connected in terms of project developments. Meanwhile, I have also been active in various developer communities in Hong Kong, including speaking at <a href="http://hk.sitcon.org/" target="_blank" rel="noopener noreferrer">SITCON HK</a> 2017 to share about React and Meteor, and organized <a href="http://ecjamming.tech/" target="_blank" rel="noopener noreferrer">E.C. Jamming</a>, one of the "<a href="http://get.tech/blog/10-mind-blowing-student-hackathons-from-around-the-world/" target="_blank" rel="noopener noreferrer">Top 10 Mind Blowing Student Hackathons From Around the World</a>", with sponsorships from Microsoft, GitHub, dotTech and local startups.
            </p>

            <p>
              The hackathon later led me to the amazing summer software engineer internship at <a href="https://hackernoon.com/thank-you-microsoft-for-the-amazing-software-engineer-internship-407a49b8f816" target="_blank" rel="noopener noreferrer">Microsoft</a> in 2017.
            </p>

            <p>
              I am looking for opportunities in the US. I am currently applying for graduate programs in Computer Science or HCI in the States and hopefully will join another competitive workplace in 2018 as an intern or an FTE after graduation.
            </p>
          </div>

          <div className="container experiences">
            <h2 className="sec-title">Experiences</h2>
            <Timeline>
              <TimelineItem
                title="Software Engineer Intern"
                time="Jun - Sep / 2017"
                intro="Developed a multi-threading internal application for the Geocoding team to parse and visualize geocoding data for more efficient debugging, testing and benchmarking."
                company={{
                  logo: "/ms-logo.png"
                }}
              />

              <TimelineItem
                title="Co-Founder & Full-Stack Developer"
                time="Sep / 2016 - Now"
                intro="Leading a team of developers and a designer working on a talent marketplace for University students to team up on projects, using React and Meteor."
                company={{
                  name: "Projectable.hk",
                  link: "http://projectable.hk/profile/id/kevin-hsu",
                  beta: true
                }}
              />

              <TimelineItem
                title="Hackathon Organizor"
                time="Jan - Mar / 2017"
                intro="Initiated and organized a student hackathon in Hong Kong and acquired sponsorships from Microsoft, GitHub, Make School, dotTech and local startup communities."
                company={{
                  name: "ECJamming.tech",
                  link: "http://ecjamming.tech/"
                }}
              />

              <TimelineItem
                title="Frontend Developer Intern"
                time="Jul - Aug / 2016"
                intro="Worked at the award-winning startup, 25sprout, developing E-Commerce websites using cutting edge technologies including React, Redux, ES6, Webpack, etc."
                company={{
                  name: "25Sprout",
                  link: "https://25sprout.com/"
                }}
              />
            </Timeline>
          </div>

          <div className="container projects">
            <h2 className="sec-title">Projects</h2>
            <div className={`row ${this.state.projectFocused && "focus"}`}>
              {this.state.projects.map((project, i) => (
                <Project
                  key={i}
                  name={project.name}
                  title={project.title}
                  img={project.img}
                  onClickMore={this.setFocusOnProject}
                  unset={this.unSetFocusOnProject}
                />
              ))}
            </div>

            <div className="row conversations">
              <h3>... Interested in something else? <span>Why not talk to Mr. ChatWeb!</span></h3>
              <ul>
                {this.state.conversations.map((msg, i) => (
                  <li key={i} onClick={() => this.chat(msg)}>
                    {msg}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container blogs">
            <h2 className="sec-title">Blogs</h2>
            <h3 className="following">Really treats blogging seriously. I love writing and sharing.</h3>
            <div className="row">
              <Blog
                link="https://hackernoon.com/thank-you-microsoft-for-the-amazing-software-engineer-internship-407a49b8f816"
                pic="/sky.jpeg"
                title="Thank you, Microsoft, for the amazing Software Engineer Internship"
                time="Aug 31 / 2017"
                featured
              />

              <Blog
                link="https://hackernoon.com/chatweb-build-websites-that-understand-users-with-full-free-microsoft-stack-dc07ce18b19d"
                pic="/coding.jpeg"
                title="ChatWeb: Build Websites that understand users with full (free) Microsoft Stack"
                time="Aug 28 / 2017"
                featured
              />

              <Blog
                link="https://medium.com/@kevin.wcb/from-a-business-startup-kid-to-a-software-engineer-intern-at-microsoft-48b610e74d16"
                pic="/ms.png"
                title="From a Business/Startup Kid to a Software Engineer Intern with Microsoft Taiwan"
                time="Jul 18 / 2017"
              />
            </div>

            <div className="more">Read More on My Medium Site</div>
          </div>
        </LUISWrap>
      </div>
    );
  }
}

export default App;
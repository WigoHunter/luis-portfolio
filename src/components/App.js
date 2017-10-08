import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollIntoView from 'scroll-into-view';
import ReactGA from 'react-ga';
import './App.css';

import LUISWrap from './LUISWrap.js';
// import LUISComponent from './LUISComponent.js';
import Header from './Header.js';
import Menu from './Menu.js';
import About from './About.js';
import Timeline, { TimelineItem } from './Timeline.js';
import Project from './Project.js';
import Blog from './Blog.js';
import { idToDOM } from '../Utils.js';

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
      openChatWeb: false,
      projectFocused: false,
      // Use Redux for this part later
      // projects: data.data,
      projects: data.data.slice(0, 4),
      conversations: [
        "What is ChatWeb?",
        "Was you the speaker sharing React and Meteor at SITCON HK 2016?",
        "How was the exchange to University of Toronto?",
        "What did you do in AIESEC Hungary?",
      ],
      hereYouGo: [
        "Here you go! Hope you enjoy this :)",
        "Here you go! Is there anything else I can answer?",
        "Here you go! Can I help you with something more?",
        "Here! Any other questions? :)",
        "Glad you asked!",
        "Enjoy! Let me know when I can help next time!",
      ]
    }

    ReactGA.initialize("UA-107559421-1");
    ReactGA.pageview(window.location.pathname);

    this.toggleChat = this.toggleChat.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleChatWeb = this.toggleChatWeb.bind(this);
    this.setFocusOnProject = this.setFocusOnProject.bind(this);
    this.unSetFocusOnProject = this.unSetFocusOnProject.bind(this);
    this.chat = this.chat.bind(this);
    this.setAppState = this.setAppState.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.hereYouGo = this.hereYouGo.bind(this);
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

  toggleChatWeb() {
    this.setState({
      openChatWeb: !this.state.openChatWeb
    });
  }

  setFocusOnProject(name) {
    let projectList = [];
    
    if (this.state.projects.findIndex(x => x.name === name) !== -1) {
      for (let i = 0; i < this.state.projects.length; i++) {
        this.state.projects[i].name === name
          ? projectList.unshift(this.state.projects[i])
          : projectList.push(this.state.projects[i])
      }
    } else {
      projectList.push(data.data.find(x => x.name === name));

      for (let i = 0; i < 3; i++) {
        projectList.push(this.state.projects[i]);
      }
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
    this.refs.luis.refs.query.focus();

    this.setState({
      openChat: true
    });
  }

  // Replace this with Redux Store
  setAppState(state) {
    this.setState(state);
  }

  scrollTo(target) {
    const node = ReactDOM.findDOMNode(this.refs[target]);

    scrollIntoView(node, {
      time: 600,
    });
  }

  hereYouGo() {
    let index = Math.floor(Math.random() * 6);

    this.refs.luis.wait(1500).then(
      _ => {
        this.refs.luis.luis(this.state.hereYouGo[index]);
      }
    )
    this.scrollTo("projects");
  }

  dispatch(req) {
    if(req.hasOwnProperty("error")) {
      this.refs.luis.luis("Sorry, I don't think I quite understand the question...");
      this.refs.luis.wait(1200).then(
        _ => {
          this.refs.luis.luis("My creator has been notified. He will look into the issue! Thank you! :)");
        }
      )
      return;
    }

    switch(req.topScoringIntent.intent) {
      case "WhatIsChatWeb":
        this.scrollTo("chatweb");
        this.setState({
          openChatWeb: true
        });
        this.refs.luis.luis("Here you go! Any further questions?");
        break;
      case "greet":
        this.refs.luis.luis("Hi! How are you doing!");
        break;
      case "CleanerWeb":
        this.refs.luis.luis("You don't have to show everything to users at first.");
        this.refs.luis.wait(1500).then(
          _ => {
            this.refs.luis.luis("At the same time, Chatweb also offer users the ability to ask for more. Why not try \"Tell me about your exchange to Toronto\"");
          }
        );        
        break;
      case "CompareToChatbot":
        this.refs.luis.luis("Well, traditional chatbots are built on messengers, which means users are limited to feasible interactions within the scope of messages.");
        this.refs.luis.wait(1500).then(
          _ => {
            this.refs.luis.luis("On the other hand, you can build all the possible interactions on web! You can log users in, you can do all your backend operations :)");
          }
        );
        break;
      case "Engagement":
        this.refs.luis.luis("It's fun!");
        this.refs.luis.wait(1400).then(
          _ => {
            this.refs.luis.luis("Joking aside, I do believe this opens possibilities of new ways to engage users on web; especially speech detections are getting mature, users will actually talk to webs in near future.");
          }
        );
        break;
      case "Navigate":
        this.refs.luis.luis("You can just tell the website what to show you!");
        this.refs.luis.wait(1000).then(
          _ => {
            this.refs.luis.luis("Try something like \"Show me more about your experiences at Microsoft.\"");
          }
        )
        break;
      case "Extend":
        this.refs.luis.luis("This is a simple portfolio site, but you can also imagine using this NLP ability in cases like user authentication, search and even sending messages to others using Socket.");
        break;
      case "Projectable":
        this.hereYouGo();
        this.setFocusOnProject("Projectable");
        break;
      case "ECJ":
        this.hereYouGo();
        this.setFocusOnProject("E.C. Jamming");
        break;
      case "CAL":
        this.hereYouGo();
        this.setFocusOnProject("CityU Apps Lab");
        break;
      case "Microsoft":
        this.hereYouGo();
        this.setFocusOnProject("Bing Geocoding");
        break;
      case "UT":
        this.hereYouGo();
        this.setFocusOnProject("University of Toronto");
        break;
      case "SITCON":
        this.hereYouGo();
        this.setFocusOnProject("SITCON x HK");
        break;
      case "AIESEC":
        this.hereYouGo();
        this.setFocusOnProject("AIESEC in Budapest");
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Menu
          open={this.state.openMenu}
          toggleMenu={this.toggleMenu}
          scrollTo={this.scrollTo}
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
          setAppState={this.setAppState}
          dispatch={this.dispatch}
          ref="luis"
        >
          <div className="container reminder">
            <h2>Let me remind you once more. <span>You can really talk to this website.</span></h2>
            <p>Feel free to ask it any question.</p>
            <p>It will respond with a new layout and contents that suit your interests.</p>
          </div>

          <About ref="about" />

          <div className="container experiences" ref="experiences">
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

              <TimelineItem
                title="Full-stack Developer Trainee"
                time="Jan - May / 2016"
                intro="Joined the lab to develop a photo sharing platform, which was later invited to be exhibited in HKTDC International ICT Expo 2016, using Meteor JS, Blaze and Bootstrap."
                company={{
                  name: "CityU Apps Lab",
                  link: "http://appslab.hk/"
                }}
              />
            </Timeline>
          </div>

          <div className="container projects" ref="projects">
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
                  child={(this.state.projectFocused && i === 0) && <div className="child">{idToDOM(project.id)}</div>}
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

          <div className="container blogs" ref="blogs">
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

            <a className="more" href="https://medium.com/@kevin.wcb" target="_blank" rel="noopener noreferrer">
              Read More <div>on My Medium Site</div>
            </a>
          </div>

          <div className={`container chatweb ${this.state.openChatWeb && "open"}`} ref="chatweb">
            <div className="title" onClick={() => this.toggleChatWeb()}>
              > What is <span className="highlight">ChatWeb</span>?<span className="cursor">|</span>
            </div>

            <div className="content">
              <p className="sub">Enriched Human-Web Interaction inspired by <span>Chatbots</span></p>

              <p className="paragraph">
                ChatWeb uses the same NLP implementations as Chatbot to understand user intents from literal messages. However, instead of returning another message back to the users, ChatWeb would re-render itself and simultaneously provide customized contents and layouts according to the user intents.
              </p>

              <ul>
                <li onClick={() => this.chat('What do you mean by "Cleaner default layout"')}>Cleaner Default Layout</li>
                <li onClick={() => this.chat('How do you "engage" users?')}>Better User Engagement</li>
                <li onClick={() => this.chat('What interations do chatbots not have?')}>Richer Interactions than Chatbots</li>
                <li onClick={() => this.chat('What "New way to navigate"')}>New way to navigate</li>
                <li onClick={() => this.chat('"Extend" to what?')}>Extendablitity</li>
              </ul>
            </div>
          </div>
          
          <div className="container footer">
            <p className="title">Follow <span>Kevin</span> for more stories</p>
            <div className="links">
              <a href="https://medium.com/@kevin.wcb" rel="noopener noreferrer" target="_blank"><i className="fa fa-medium"></i></a>
              <a href="https://www.linkedin.com/in/kai-chun-kevin-hsu-5428bbb4/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href="https://twitter.com/kevhs_pj" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
              <a href="https://github.com/WigoHunter" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
              <a href="https://www.facebook.com/kevinwigohsu" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
            </div>
          </div>
        </LUISWrap>
      </div>
    );
  }
}

export default App;
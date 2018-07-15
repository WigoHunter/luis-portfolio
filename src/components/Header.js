import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        index: this.state.index === 3 ? 0 : this.state.index + 1
      });
    }, 8000);
  }

  render() {
    const { backgrounds, toggleChat, openMenu } = this.props;

    return (
      <div
        className="header"
        style={{
          background: `url(${backgrounds[this.state.index]}) center center / cover`
        }}
      >
        <div className={`overlay ${openMenu && "open"}`}></div>
        <div className="profile">
          <div className="pic" style={{ background: "url(/me.jpeg) center center / cover" }}></div>
          <h2>Kevin Hsu</h2>
          <p className="subtitle">Changing the World @Cornell Tech</p>
          <div className="line"></div>
          <p className="hide-on-mobile">
            Not the normal portfolio page you've seen.
          </p>
          <p className="hide-on-mobile">You can, quite literally, <span onClick={() => toggleChat()}>TALK</span> to this website.</p>
        
          <div className="links">
            <a href="https://medium.com/@kevin.wcb" rel="noopener noreferrer" target="_blank"><i className="fa fa-medium"></i></a>
            <a href="https://www.linkedin.com/in/kai-chun-kevin-hsu-5428bbb4/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="https://twitter.com/kevhs_pj" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
            <a href="https://www.facebook.com/kevinwigohsu" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
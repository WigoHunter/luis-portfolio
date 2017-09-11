import React from 'react';

const Navbar = ({ list, open, toggle }) => (
    <div className={`navbar ${open && "open"}`}>
        <div className={`close ${open && "x"}`} onClick={() => toggle()}>＋</div>
        <div className="nav-top">
            <div className="profile">
                <div
                    className="pic"
                    style={{
                        background: "url(/me.jpeg) center center / cover"
                    }}
                >
                </div>
                <h3>Kevin Hsu</h3>
                <div className="links">
                    <a href="https://medium.com/@kevin.wcb" rel="noopener noreferrer" target="_blank"><i className="fa fa-medium"></i></a>
                    <a href="https://www.linkedin.com/in/kai-chun-kevin-hsu-5428bbb4/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="https://twitter.com/kevhs_pj" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="https://github.com/WigoHunter" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://www.facebook.com/kevinwigohsu" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
                </div>
            </div>

            <ul>
                {list.map(item => (
                    <li>{item}</li>
                ))}
                <li>What is <a href="https://hackernoon.com/chatweb-build-websites-that-understand-users-with-full-free-microsoft-stack-dc07ce18b19d" target="_blank">ChatWeb</a>?</li>
            </ul>
        </div>
        <div className="nav-footer">
            <p>Built with Microsoft LUIS, Azure Functions, React and open sourced at <a href="https://github.com/WigoHunter/luis-portfolio" rel="noopener noreferrer" target="_blank">Github</a></p>
        </div>
    </div>
);

export default Navbar;
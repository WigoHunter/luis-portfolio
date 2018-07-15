import React from 'react';

const Menu = ({ open, toggleMenu, scrollTo, randomQ }) => (
    <div>
        <div className={`toggle ${open && "open"}`} onClick={() => toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={`menu ${open && "open"}`}>
            <li className={open && "open"} onClick={() => scrollTo("about")}>About Me</li>
            <li className={open && "open"} onClick={() => scrollTo("experiences")}>Experiences</li>
            <li className={`hide-on-mobile ${open && "open"}`} onClick={() => scrollTo("projects")}>Projects</li>
            <li className={open && "open"} onClick={() => scrollTo("blogs")}>Blog Posts</li>
            <li className={`hide-on-mobile ${open && "open"}`} onClick={() => scrollTo("chatweb")}>What is <span>ChatWeb</span></li>
        </ul>
    </div>
);

export default Menu;
import React from 'react';

const Menu = ({ open, toggleMenu }) => (
    <div>
        <div className={`toggle ${open && "open"}`} onClick={() => toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={`menu ${open && "open"}`}>
            <li className={open && "open"}>About Me</li>
            <li className={open && "open"}>Experiences</li>
            <li className={open && "open"}>Projects</li>
            <li className={open && "open"}>Blog Posts</li>
            <li className={open && "open"}>What is <span>ChatWeb</span></li>
        </ul>
    </div>
);

export default Menu;
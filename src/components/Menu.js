import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        
    }

    render() {
        const { open, toggleMenu } = this.props;

        return (
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
    }
}

export default Menu;
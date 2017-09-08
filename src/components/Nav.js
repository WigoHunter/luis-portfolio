import React from 'react';

const Navbar = ({ list, open }) => (
    <div className={`navbar ${open && "open"}`}>
        <ul>
            {list.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
);

export default Navbar;
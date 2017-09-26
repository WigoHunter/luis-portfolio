import React from 'react';

const Skill = ({ skill, bar }) => (
    <div className="skill">
        <p>{skill}</p> 
        <div className="bar" style={{ width: bar }}></div>
    </div>
);

export default Skill;
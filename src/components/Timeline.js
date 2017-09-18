import React from 'react';
import Image from './Image.js';

const Timeline = ({ children }) => (
    <div className="timeline">
        {children}
    </div>
);

export const TimelineItem = ({ title, company, time, intro }) => (
    <div className="exp">
        <div className="bullet"></div>
        <div className="bullet"></div>
        <div className="content">
            {company.logo && <Image src={company.logo} height="20px" width="90px" />}
            <h3>{title}</h3>
            {company.name &&
                <p className="company">
                    @ <a href={company.link} target="_blank" rel="noopener noreferrer">{company.name}</a> {company.beta && <span>(private beta)</span>}
                </p>
            }
            <p className="time">{time}</p>
            <p className="info">
                {intro}
            </p>
        </div>
    </div>
);

export default Timeline;
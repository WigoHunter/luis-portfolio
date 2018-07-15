import React, { Component } from 'react';
import Image from './Image.js';

class About extends Component {
    render() {
        return (
            <div className="container me about" ref="about">
                <h2 className="sec-title">About me</h2>
                <h3 className="hide-on-mobile">Beloved Family. Close Friends. Supportive Girlfriend.</h3>
                <div className="row hide-on-mobile">
                    <Image src="/family.jpg" height="220px" width="320px"  />
                    <Image src="/friends.jpg" height="220px" width="320px" />
                    <Image src="/gf.jpg" height="220px" width="320px" />
                </div>
        
                <p>
                    I am Kevin from Taiwan, currently a Master Student in Connective Media at <a href="https://tech.cornell.edu" target="_blank" rel="noopener noreferrer">Cornell Tech</a>. 
                </p>
        
                <p>
                    I am always into the community side of Computer Science, have led multiple student technical initiatives and once organized <a href="http://ecjamming.tech/" target="_blank" rel="noopener noreferrer">E.C. Jamming</a>, which was later named as one of the "<a href="http://get.tech/blog/10-mind-blowing-student-hackathons-from-around-the-world/" target="_blank" rel="noopener noreferrer">Top 10 Mind Blowing Student Hackathons From Around the World</a>" in 2017. The hackathon led me into my next amazing journey - summer software engineer internship at <a href="https://hackernoon.com/thank-you-microsoft-for-the-amazing-software-engineer-internship-407a49b8f816" target="_blank" rel="noopener noreferrer">Microsoft</a>.
                </p>
        
                <p>
                    I am now looking for summer internship opportunities in San Francisco Bay Area in the summer of 2019. If your organization is ambitous and indeed want to make the world a better place, USE ME. Let me help! :)
                </p>
            </div>
        );
    }
}

export default About;
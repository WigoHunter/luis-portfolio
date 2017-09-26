import React, { Component } from 'react';
import Image from './Image.js';

class About extends Component {
    render() {
        return (
            <div className="container me">
                <h2 className="sec-title">About me</h2>
                <h3>Beloved Family. Close Friends. Supportive Girlfriend.</h3>
                <div className="row">
                <Image src="/family.jpg" height="220px" width="320px"  />
                <Image src="/friends.jpg" height="220px" width="320px" />
                <Image src="/gf.jpg" height="220px" width="320px" />
                </div>
        
                <p>
                I am Kevin from Taiwan, currently a Final Year student at the University of Hong Kong with double majors in Computer Science and Business. 
                </p>
        
                <p>
                I am always into the community side of Computer Science and currently lead a student project, <a href="http://projectable.hk/profile/id/kevin-hsu" target="_blank" rel="noopener noreferrer">Projectable</a>, to make University students in Hong Kong more connected in terms of project developments. Meanwhile, I have also been active in various developer communities in Hong Kong, including speaking at <a href="http://hk.sitcon.org/" target="_blank" rel="noopener noreferrer">SITCON HK</a> 2017 to share about React and Meteor, and organized <a href="http://ecjamming.tech/" target="_blank" rel="noopener noreferrer">E.C. Jamming</a>, one of the "<a href="http://get.tech/blog/10-mind-blowing-student-hackathons-from-around-the-world/" target="_blank" rel="noopener noreferrer">Top 10 Mind Blowing Student Hackathons From Around the World</a>", with sponsorships from Microsoft, GitHub, dotTech and local startups.
                </p>
        
                <p>
                The hackathon later led me to the amazing summer software engineer internship at <a href="https://hackernoon.com/thank-you-microsoft-for-the-amazing-software-engineer-internship-407a49b8f816" target="_blank" rel="noopener noreferrer">Microsoft</a> in 2017.
                </p>
        
                <p>
                I am looking for opportunities in the US. I am currently applying for graduate programs in Computer Science or HCI in the States and hopefully will join another competitive workplace in 2018 as an intern or an FTE after graduation.
                </p>
            </div>
        );
    }
}

export default About;
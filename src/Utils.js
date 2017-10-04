import React from 'react';
import Skill from './components/Skill.js';

export const htmlDecode = input => {
    const elem = document.createElement('div');
    elem.innerHTML = input;
    return elem;
}

export const idToDOM = id => {
    switch(id) {
        case "sitcon":
            return (
                <div className="iframe">
                    <iframe title="sitcon" width="360" height="186" src="https://www.youtube.com/embed/auNTp1lc2ZE?start=17434" allowfullscreen></iframe>
                </div>
            );
        case "binggc":
            return (
                <div className="binggc columns">
                    <div className="left">
                        <Skill skill="C#" bar="60%" />
                        <Skill skill="JavaScript" bar="80%" />
                        <Skill skill="HTML5 Web Worker" bar="70%" />
                    </div>
    
                    <div className="right">
                        <p>
                            At Microsoft, I was working with the Bing Geocoding Team to build an internal debugging tool, BingGC UX, using Multi-threading C# and asynchronous JavaScript programs to handle and visualize hundreds of thousands of geocoding data.
                        </p>
        
                        <p>Read <a href="https://hackernoon.com/thank-you-microsoft-for-the-amazing-software-engineer-internship-407a49b8f816" target="_blank" rel="noopener noreferrer">full story</a>.</p>
                    </div>
                </div>
            );
        case "pj":
            return (
                <div className="pj columns">
                    <div className="left">
                        <Skill skill="React JS" bar="80%" />
                        <Skill skill="Meteor JS" bar="70%" />
                        <Skill skill="Chatbot" bar="65%" />
                    </div>
    
                    <div className="right">
                        <p>
                            I believe Universities are undoubtfully one of the most diverse talent pools a person can ever get access to. If a student is aspired to build a project, resources within the university and its students are sufficient to make it work. For this vision, I led 4 other students developing this talent matching platform for students.
                        </p>
        
                        <p>Check out our <a href="http://projectable.hk/profile/id/kevin-hsu" target="_blank" rel="noopener noreferrer">private beta</a>.</p>
                    </div>
                </div>
            );
        case "ecj":
            return (
                <div className="ecj columns">
                    <div className="left">
                        <Skill skill="Gulp" bar="60%" />
                        <Skill skill="Pitching" bar="85%" />
                        <Skill skill="Leadership" bar="75%" />
                    </div>
        
                    <div className="right">
                        <p>
                            Before graduating from HKU, I organized a student Hackathon to encourage student projects. Within 4 months, I acquired partnerships from local startups and tech giants including Microsoft, GitHub, Make School and introduced bonus rules. ECJ was listed in "<a href="http://get.tech/blog/10-mind-blowing-student-hackathons-from-around-the-world/" target="_blank" rel="noopener noreferrer">Top 10 Mind Blowing Student Hackathon From Around the World</a>". 
                        </p>
            
                        <p>Check out our <a href="http://ecjamming.tech/" target="_blank" rel="noopener noreferrer">website</a>.</p>
                    </div>
                </div>
            );
        case "ut":
            return (
                <div className="ut columns">
                    <div className="left">
                        <Skill skill="Self-Learning Ability" bar="75%" />
                        <Skill skill="Android App" bar="60%" />
                        <Skill skill="Happiness" bar="90%" />
                    </div>
        
                    <div className="right">
                        <p>
                            I started to become a self-taught programmer at University of Toronto. They offered great courses (I really enjoyed the Software Design course where we developed an working Android App) and a great balance of workloads in courses. I spent my free time learning Web Programming (and got <a href="https://about.udemy.com/students/student-profile-kevin-hsu/" target="_blank" rel="noopener noreferrer">interviewed by Udemy</a>) and travelling around the city!
                        </p>
            
                        <p>Check out my <a href="https://goo.gl/9TEsQv" target="_blank" rel="noopener noreferrer">transcript</a> (Got As in CS courses when class averages were Cs).</p>
                    </div>
                </div>
            );
        case "aiesec":
            return (
                <div className="ut columns">
                    <div className="left">
                        <Skill skill="Event Management" bar="60%" />
                        <Skill skill="International Exposure" bar="80%" />
                        <Skill skill="Happiness" bar="90%" />
                    </div>
        
                    <div className="right">
                        <p>
                            I joined the program in my freshman year as an oversea camp facilitator for AIESEC Budapest. There were other 15 facilitators from over 10 countries in the world. Our daily job was to have fun with local high school students while teaching them English, sharing our cultures as well as learning theirs from them!
                        </p>
            
                        <p>Check out my <a href="http://wigoxearth.blogspot.hk/2014/07/blog-post.html" target="_blank" rel="noopener noreferrer">Blog post</a> (in Chinese).</p>
                    </div>
                </div>
            );
        default:
            return (<div></div>);
    }
}
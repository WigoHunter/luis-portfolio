import React from 'react';

const Blog = ({ link, pic, title, time, featured }) => (
    <a className="blog" href={link} target="_blank" rel="noopener noreferrer">
        <div className="pic-area">
            <div className="pic" style={{ background: `url(${pic}) center center / cover` }}></div>
        </div>
        <div className="content">
            <h4>{title}</h4>
            <p className="time">{time}</p>
            {featured &&
                <p className="feature"><img src="./hn.jpg" alt="hackernoon" /><div className="info">Featured on HackerNoon</div></p>
            }
        </div>
    </a>
);

export default Blog;
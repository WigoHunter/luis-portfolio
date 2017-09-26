import React from 'react';

const Project = ({ name, title, img, onClickMore, unset, child }) => (
    <div className="block">
        <div className="unset" onClick={() => unset()}>＋</div>
        <div className="content">
        <div className="info">
            <h3>{name}</h3>
            <p className="title">{title}</p>
            <p className="more" onClick={() => onClickMore(name)}>Show Me More</p>
            {child}
        </div>
        <img src={img} alt={name} />
        </div>
    </div>
);

export default Project;
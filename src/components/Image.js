import React from 'react';

const Image = ({ src, height, width }) => (
    <div
        className="image"
        style={{
            background: `url(${src}) center center / cover`,
            height: height,
            width: width ? width : height
        }}
    >
    </div>
);

export default Image;
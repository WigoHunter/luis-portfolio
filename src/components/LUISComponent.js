import React from 'react';

const LUISComponent = ({intent, luis, children}) => {
    return intent === luis
        ? children
        : null
}

export default LUISComponent;
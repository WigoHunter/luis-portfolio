import React, { Component } from 'react';

class LUISResult extends Component {
    render() {
        return (
            <div>{this.props.result}</div>
        );
    }
}

export default LUISResult;
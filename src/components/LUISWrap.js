import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'whatwg-fetch';

import LUISResult from './LUISResult.js';

class LUISWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "Microsoft?",
            intent: "WhatDidYouLearn",
            company: "Microsoft"
        };
    }

    componentDidMount() {
        // fetch(`https://luis-proxy.azurewebsites.net/api/HttpTriggerCSharp1?code=frYvHpy1/zSHOulYI3YHBLjBPzelfND4YD/GL6u3axD6hMkBfT88xA==&query=${this.state.query}`)
        //     .then(res => res.json())
        //     .then(json => {
        //         this.setState({ intent: JSON.parse(json).topScoringIntent.intent });
        //     })
        //     .then(() => {
        //         console.log(this.state.intent);
        //     });
    }

    componentDidUpdate() {
        
    }

    submitLUISQuery(e) {
        e.preventDefault();
        
        console.log(ReactDOM.findDOMNode(this.refs.query).value);
    }

    render() {
        const { intents } = this.props;

        return (
            <div className="luis-wrap">
                <h2>What Do You Want to Know About Me</h2>
                <form onSubmit={e => this.submitLUISQuery(e)}>
                    <input type="text" ref="query" />
                </form>

                {/*intents.map(intent => (
                    intent === this.state.intent
                        ? <LUISResult result={intent} />
                        : ""
                ))*/}
            </div>
        );
    }
}

export default LUISWrap;
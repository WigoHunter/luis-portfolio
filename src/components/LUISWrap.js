import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'whatwg-fetch';

class LUISWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openChat: false,
            query: "Microsoft?",
            intent: "WhatDidYouLearn",
            company: "Microsoft"
        };

        this.toggleChat = this.toggleChat.bind(this);
    }

    componentDidMount() {
        // fetch(`https://luis-proxy.azurewebsites.net/api/HttpTriggerCSharp1?code=frYvHpy1/zSHOulYI3YHBLjBPzelfND4YD/GL6u3axD6hMkBfT88xA==&query=${this.state.query}`)
        //     .then(res => res.json())
        //     .then(json => {
        //         const resource = JSON.parse(json);

        //         this.setState({
        //             intent: resource.topScoringIntent.intent,
        //             company: resource.entities[0].entity
        //         });
        //     })
        //     .then(() => {
        //         console.log(this.state.intent);
        //     });
    }

    componentDidUpdate() {
        
    }

    toggleChat() {
        this.setState({
            openChat: !this.state.openChat
        });
    }

    submitLUISQuery(e) {
        e.preventDefault();
        
        console.log(ReactDOM.findDOMNode(this.refs.query).value);
    }

    render() {
        const { intents, children } = this.props;
        const { openChat } = this.state;

        return (
            <div className="luis-wrap">
                <div className={`luis-chat ${openChat && "open"}`}>
                    <h2 onClick={() => this.toggleChat()}>Mr. ChatWeb</h2>
                    {/*<form onSubmit={e => this.submitLUISQuery(e)}>
                        <input type="text" ref="query" />
                    </form>*/}
                </div>

                {children}
            </div>
        );
    }
}

export default LUISWrap;
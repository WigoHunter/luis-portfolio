import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'whatwg-fetch';

class LUISWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typing: false,
            query: "",
            intent: "",
            company: "",
            chatHistory: [],
            dotdotdot: "",
        };

        this.submitLUISQuery = this.submitLUISQuery.bind(this);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    submitLUISQuery(e) {
        e.preventDefault();
        
        this.setState({
            chatHistory: this.state.chatHistory.concat([{
                message: ReactDOM.findDOMNode(this.refs.query).value,
                from: "user"
            }]),
            typing: true,
            query: ReactDOM.findDOMNode(this.refs.query).value,
        }, () => {
            ReactDOM.findDOMNode(this.refs.query).value = "";
            let interval = setInterval(() => {
                this.dotdotdot();
            }, 600);

            setTimeout(() => {
                fetch(`https://luis-proxy.azurewebsites.net/api/HttpTriggerCSharp1?code=frYvHpy1/zSHOulYI3YHBLjBPzelfND4YD/GL6u3axD6hMkBfT88xA==&query=${this.state.query}`)
                    .then(res => res.json())
                    .then(json => {
                        const resource = JSON.parse(json);

                        this.setState({
                            intent: resource.topScoringIntent.intent,
                            company: resource.entities.length ? resource.entities[0].entity : "",
                            typing: false,
                            dotdotdot: "",
                            chatHistory: this.state.chatHistory.concat([{
                                message: `You are asking ${resource.topScoringIntent.intent} about ${resource.entities.length ? resource.entities[0].entity : ""}`,
                                from: "LUIS",
                            }])
                        });
                    });
            }, 600);
        });
    }

    dotdotdot() {
        this.setState({
            dotdotdot: this.state.dotdotdot.length === 3 ? "" : this.state.dotdotdot + "."
        });
    }

    scrollToBottom() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    render() {
        const { intents, openChat, toggleChat, children } = this.props;
        const { typing, chatHistory, dotdotdot } = this.state;

        return (
            <div className="luis-wrap">
                <div className={`luis-chat ${openChat && "open"}`}>
                    <h2 onClick={() => toggleChat()}>
                        <span className="green-dot"></span>
                        Mr. ChatWeb
                        <span className={`close ${openChat && "x"}`}>＋</span>
                    </h2>
                    
                    <div className="chats" ref="chats" onClick={() => ReactDOM.findDOMNode(this.refs.query).focus()}>
                        {chatHistory.map((chat, i) => (
                            <div key={i} className={`chat ${chat.from === "user" && "pull-right"}`}>
                                {chat.message}
                            </div>
                        ))}

                        {typing &&
                            <div className="chat bubbles">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        }

                        {typing &&
                            <div className="typing">
                                Mr.ChatWeb is typing{dotdotdot}
                            </div>
                        }
                    </div>

                    <form onSubmit={e => this.submitLUISQuery(e)}>
                        <input type="text" ref="query" />
                    </form>
                </div>

                {children}
            </div>
        );
    }
}

export default LUISWrap;
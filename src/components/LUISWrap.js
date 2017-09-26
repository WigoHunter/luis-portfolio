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
        this.updateQuery = this.updateQuery.bind(this);
        this.toggle = this.toggle.bind(this);
        this.luis = this.luis.bind(this);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    submitLUISQuery(e) {
        e.preventDefault();
        let q = this.state.query;
        
        this.setState({
            chatHistory: this.state.chatHistory.concat([{
                message: ReactDOM.findDOMNode(this.refs.query).value,
                from: "user"
            }]),
            typing: true,
            query: "",
        }, () => {
            let interval = setInterval(() => {
                this.dotdotdot();
            }, 600);

            setTimeout(() => {
                fetch(`https://luis-proxy.azurewebsites.net/api/HttpTriggerCSharp1?code=frYvHpy1/zSHOulYI3YHBLjBPzelfND4YD/GL6u3axD6hMkBfT88xA==&query=${q}`)
                    .then(res => res.json())
                    .then(json => {
                        const resource = JSON.parse(json);
                        this.props.dispatch(resource);
                        this.setState({
                            typing: false,
                            dotdotdot: ""
                        });                    
                    });
            }, 600);
        });
    }

    luis(msg) {
        this.setState({
            typing: false,
            dotdotdot: "",
            chatHistory: this.state.chatHistory.concat([{
                message: msg,
                from: "LUIS",
            }])
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

    updateQuery(query) {
        this.setState({
            query: query
        });
    }

    typeQuery(e) {
        this.updateQuery(e.target.value);
    }

    toggle() {
        this.props.toggleChat();
        this.refs.query.focus();
    }

    render() {
        const { openChat, children } = this.props;
        const { query, typing, chatHistory, dotdotdot } = this.state;

        return (
            <div className="luis-wrap">
                <div className={`luis-chat ${openChat && "open"}`}>
                    <h2 onClick={() => this.toggle()}>
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
                        <input autoFocus type="text" ref="query" value={query} onChange={e => this.typeQuery(e)} />
                    </form>
                </div>

                {children}
            </div>
        );
    }
}

export default LUISWrap;
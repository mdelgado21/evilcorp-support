import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      isTyping: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.sendMessage();
    this.setState({ message: '' });
  };
  componentWillUnmount() {
    this.stopCheckingTyping();
  }

  sendMessage = () => {
    this.props.sendMessage(this.state.message);
  };

  sendTyping = () => {
    this.lastUpdateTime = Date.now();
    if (!this.state.isTyping) {
      this.setState({ isTyping: true });
      this.props.sendTyping(true);
      this.startCheckingTyping();
    }
  };
  startCheckingTyping = () => {
    this.typingInterval = setInterval(() => {
      if (Date.now() - this.lastUpdateTime > 300) {
        this.setState({ isTyping: false });
        this.stopCheckingTyping();
      }
    }, 300);
  };
  stopCheckingTyping = () => {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
      this.props.sendTyping(false);
    }
  };

  render() {
    const { message } = this.state;
    return (
      <div className="message-input">
        <form onSubmit={this.handleSubmit} className="message-form">
          <input
            id="message"
            ref={'messageinput'}
            type="text"
            className="form-control"
            value={message}
            autoComplete={'off'}
            placeholder="Type something here"
            onKeyUp={e => {
              e.keyCode !== 13 && this.sendTyping();
            }}
            onChange={({ target }) => {
              this.setState({ message: target.value });
            }}
          />
          <button disabled={message.length < 1} type="submit" className="send">
            <FormattedMessage id="message-input.send" />
          </button>
        </form>
      </div>
    );
  }
}

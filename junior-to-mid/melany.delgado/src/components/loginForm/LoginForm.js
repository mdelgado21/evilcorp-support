import React, { Component } from 'react';
import { VERIFY_USER } from '../../common/Events';
import { FormattedMessage } from 'react-intl';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      error: ''
    };
  }

  setUser = ({ user, isRejected }) => {
    if (isRejected) {
      this.setError('login.support-error');
    } else {
      this.setError('');
      this.props.setUser(user);
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { socket, type } = this.props;
    const { nickname } = this.state;

    if (!!nickname) {
      socket.emit(VERIFY_USER, { nickname, type }, this.setUser);
    } else {
      this.setError('login.empty-user-error');
    }
  };

  handleChange = e => {
    this.setState({ nickname: e.target.value });
  };

  setError = error => {
    this.setState({ error });
  };
  render() {
    const { nickname, error } = this.state;
    return (
      <div className="login-container">
        <div className="login">
          <form onSubmit={this.handleSubmit} className="login-form">
            <span className="title">
              <FormattedMessage id="login.welcome" />
            </span>
            <div className="fsociety-logo" />
            <label htmlFor="nickname">
              <h2>
                <FormattedMessage id="login.enter-username" />:
              </h2>
            </label>
            <input
              ref={input => {
                this.textInput = input;
              }}
              type="text"
              id="nickname"
              value={nickname}
              onChange={this.handleChange}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="error">
              {error ? <FormattedMessage id={error} /> : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

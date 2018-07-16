import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SideBarOption extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    accepted: PropTypes.bool,
    lastMessage: PropTypes.string,
    active: PropTypes.bool,
    onAccept: PropTypes.func,
    onDecline: PropTypes.func
  };

  static defaultProps = {
    lastMessage: '',
    active: false,
    accepted: false,
    onAccept: () => {},
    onDecline: () => {}
  };

  render() {
    const {
      name,
      lastMessage,
      active,
      accepted,
      onAccept,
      onDecline
    } = this.props;
    return (
      <div className={`user ${active ? 'active' : ''}`}>
        <div className="user-info" onClick={onAccept}>
          <div className="name">{name}</div>
          {lastMessage && <div className="last-message">{lastMessage}</div>}
        </div>
        {!accepted && (
          <div className="decline-button" onClick={onDecline}>
            Decline
          </div>
        )}
      </div>
    );
  }
}

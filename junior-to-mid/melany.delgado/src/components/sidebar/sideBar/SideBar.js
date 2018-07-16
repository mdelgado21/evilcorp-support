import React, { Component } from 'react';
import MdExitToApp from 'react-icons/lib/md/exit-to-app';
import { SideBarOption } from '../sideBarOption/SideBarOption';
import { differenceBy } from 'lodash';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: ''
    };
  }

  addChatForUser = user => {
    this.props.onStartChat(user);
  };

  declineChatForUser = user => {
    this.props.onDeclineChatForUser(user);
  };

  render() {
    const { user, logout, users, activeUserId } = this.props;
    return (
      <div id="side-bar">
        <div className="heading">
          <div className="app-name">Chats</div>
        </div>
        <div className="users" ref="users">
          {differenceBy(users, [user], 'id').map(otherUser => {
            return (
              <SideBarOption
                key={otherUser.id}
                name={otherUser.name}
                accepted={otherUser.accepted}
                active={otherUser.id === activeUserId}
                onAccept={() => {
                  this.addChatForUser(otherUser);
                }}
                onDecline={() => {
                  this.declineChatForUser(otherUser);
                }}
              />
            );
          })}
        </div>
        <div className="current-user">
          <span>{user.name}</span>
          <div
            onClick={() => {
              logout();
            }}
            title="Logout"
            className="logout"
          >
            <MdExitToApp />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../../common/Events';
import LoginForm from '../loginForm/LoginForm';
import ChatContainer from '../chats/chatContainer/ChatContainer';
import { SUPPORT } from '../../common/UserTypes';

const socketUrl = 'http://localhost:3231';
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null,
      type: 'Costumer User'
    };
  }
  componentDidMount() {
    if (this.props.location.pathname === '/admin/support') {
      this.setState({ type: SUPPORT });
    }
  }

  componentWillMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketUrl);

    socket.on('connect', () => {
      console.log('Connected');
    });

    this.setState({ socket });
  };

  setUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };

  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    const { socket, user, type } = this.state;
    return (
      <div className="container">
        {!user ? (
          <LoginForm socket={socket} setUser={this.setUser} type={type} />
        ) : (
          <ChatContainer
            socket={socket}
            user={user}
            setUser={() => this.setState({ user: null })}
            logout={this.logout}
          />
        )}
      </div>
    );
  }
}

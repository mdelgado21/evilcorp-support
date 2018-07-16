import React, { Component } from 'react';
import {
  TYPING,
  MESSAGE_RECIEVED,
  MESSAGE_SENT,
  USER_ACCEPTED,
  USER_CONNECTED,
  USER_DISCONNECTED,
  USER_DECLINED,
  END_SESSION
} from '../../../common/Events';
import { SUPPORT } from '../../../common/UserTypes';
import ChatHeading from '../chatHeading/ChatHeading';
import Messages from '../../messages/messages/Messages';
import MessageInput from '../../messages/messageInput/MessageInput';
import SideBar from '../../sidebar/sideBar/SideBar';
import { values, pull, differenceBy, filter, some, map } from 'lodash';
import { FormattedMessage } from 'react-intl';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      declined: false,
      activeChat: null,
      activeUserId: null,
      users: []
    };
  }

  componentDidMount() {
    const { socket } = this.props;
    this.initSocket(socket);
  }

  componentWillUnmount() {
    const { socket } = this.props;
    socket.off(USER_ACCEPTED);
    socket.off(USER_CONNECTED);
    socket.off(USER_DISCONNECTED);
  }
  initSocket(socket) {
    socket.on(USER_ACCEPTED, this.addChat);
    socket.on(USER_CONNECTED, users => {
      this.setState({ users: values(users) });
    });
    socket.on(USER_DISCONNECTED, users => {
      this.removeUser(users);
    });
    socket.on(USER_DECLINED, user => {
      this.onDeclinedBySupport(user);
    });
    socket.on(END_SESSION, (users, userId) => {
      this.closeSession(users, userId);
    });
  }

  startChat = receiver => {
    const { socket, user } = this.props;

    let users = map(this.state.users, function(u) {
      if (u.id === receiver.id) {
        u.accepted = true;
      }
      return u;
    });
    this.setState({ users: values(users) });

    let hasChat = this.getUserChat(receiver).length > 0;
    socket.emit(USER_ACCEPTED, { receiver, sender: user, hasChat });

    if (hasChat) {
      this.setActiveChat(this.getUserChat(receiver)[0]);
      this.setState({ activeUserId: receiver.id });
    }
  };

  onDeclineChatForUser = user => {
    const { socket } = this.props;
    let users = pull(this.state.users, user);
    this.setState({ users: values(users) });
    socket.emit(USER_DECLINED, user);
  };

  onDeclinedBySupport = userId => {
    if (userId === this.props.user.id) {
      this.setState({ declined: true });
    }
  };

  closeSession = (users, userId) => {
    const { setUser } = this.props;
    this.removeUser(users);
    if (userId === this.props.user.id) {
      setUser();
    }
  };

  close = () => {
    const { activeChat } = this.state;
    const { user, socket } = this.props;
    let receiver = pull(activeChat.users, user)[0];
    socket.emit(END_SESSION, receiver);
  };

  removeUser = users => {
    const removedUser = differenceBy(this.state.users, values(users), 'id')[0];
    this.setState({ users: values(users) });
    if (!!removedUser) {
      this.removeChats(removedUser);
    }
  };

  removeChats = removedUser => {
    const { chats, activeChat } = this.state;

    let newChats = filter(chats, function(c) {
      return !some(c.users, ['id', removedUser.id]);
    });

    let activeChatHasRemovedUser =
      activeChat && !!activeChat.users.find(u => u.id === removedUser.id);
    this.setState({ chats: newChats });

    if (newChats.length === 0 || activeChatHasRemovedUser) {
      this.setState({ activeChat: null });
    }
  };

  addChat = (chat, users, receiverId) => {
    const { socket } = this.props;
    const { chats } = this.state;
    const newChats = [...chats, chat];

    this.setState({
      chats: newChats,
      activeChat: chat,
      activeUserId: receiverId,
      users: values(users)
    });

    const messageEvent = `${MESSAGE_RECIEVED}-${chat.id}`;
    const typingEvent = `${TYPING}-${chat.id}`;

    socket.on(messageEvent, this.addMessageToChat(chat.id));
    socket.on(typingEvent, this.updateTypingChat(chat.id));
  };

  getUserChat = user => {
    const { chats } = this.state;
    return chats.filter(chat => {
      return chat.users.find(u => u.id === user.id);
    });
  };

  updateTypingChat = chatId => {
    return ({ isTyping, user }) => {
      if (user.id !== this.props.user.id) {
        const { chats } = this.state;
        let newChats = chats.map(chat => {
          if (chat.id === chatId) {
            if (isTyping && !chat.typingUsers.includes(user.name)) {
              chat.typingUsers.push(user.name);
            } else if (!isTyping && chat.typingUsers.includes(user.name)) {
              chat.typingUsers = chat.typingUsers.filter(u => u !== user.name);
            }
          }
          return chat;
        });
        this.setState({ chats: newChats });
      }
    };
  };

  addMessageToChat = chatId => {
    return message => {
      const { chats } = this.state;
      let newChats = chats.map(chat => {
        if (chat.id === chatId) {
          chat.messages.push(message);
        }
        return chat;
      });
      this.setState({ chats: newChats });
    };
  };

  sendMessage = (chatId, message) => {
    const { socket } = this.props;
    socket.emit(MESSAGE_SENT, { chatId, message });
  };

  sendTyping = (chatId, isTyping) => {
    const { socket } = this.props;
    socket.emit(TYPING, { chatId, isTyping });
  };

  setActiveChat = activeChat => {
    this.setState({ activeChat });
  };

  restartChat = () => {
    const { setUser } = this.props;
    this.setState({ decline: false });
    setUser();
  };

  render() {
    const { user, logout } = this.props;
    const { activeChat, activeUserId, users, declined } = this.state;
    return (
      <div className="chat-container">
        {user.type === SUPPORT && (
          <SideBar
            logout={logout}
            user={user}
            users={users}
            activeChat={activeChat}
            activeUserId={activeUserId}
            onStartChat={this.startChat}
            onDeclineChatForUser={this.onDeclineChatForUser}
          />
        )}
        <div className="chat-room-container">
          {activeChat !== null ? (
            <div className="chat-room">
              <ChatHeading name={activeChat.name} close={this.close} />
              <Messages
                messages={activeChat.messages}
                user={user}
                typingUsers={activeChat.typingUsers}
              />
              <MessageInput
                sendMessage={message => {
                  this.sendMessage(activeChat.id, message);
                }}
                sendTyping={isTyping => {
                  this.sendTyping(activeChat.id, isTyping);
                }}
              />
            </div>
          ) : (
            <div className="chat-room choose">
              <h3
                className={
                  user.type === SUPPORT
                    ? 'support'
                    : declined
                      ? 'user-declined'
                      : 'user-wait'
                }
              >
                {user.type === SUPPORT ? (
                  <FormattedMessage id="chat-container.choose" />
                ) : declined ? (
                  <FormattedMessage id="chat-container.decline-message" />
                ) : (
                  <FormattedMessage id="chat-container.wait-message" />
                )}
              </h3>
              {declined && (
                <div className="back-button" onClick={this.restartChat}>
                  <FormattedMessage id="chat-container.back" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

import React from 'react';
import { shallow } from 'enzyme';
import ChatContainer from './ChatContainer';
import ChatHeading from '../chatHeading/ChatHeading';
import Messages from '../../messages/messages/Messages';
import MessageInput from '../../messages/messageInput/MessageInput';
import SideBar from '../../sidebar/sideBar/SideBar';
import { FormattedMessage } from 'react-intl';
import sinon from 'sinon';

let wrapped, restartChatStub;

describe('ChatContainer and as no active chat and is a costumer', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { type: 'Costumer User' },
    restartChat: fn => fn
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    const component = wrapped.instance();
    restartChatStub = sinon.stub(component, 'restartChat').callsFake(() => {});
    component.forceUpdate();
  });

  it('show correctly items', () => {
    expect(wrapped.find('.chat-container').length).toEqual(1);
    expect(wrapped.find('.chat-room-container').length).toEqual(1);
    expect(wrapped.find('.chat-room').length).toEqual(1);
    expect(wrapped.find('.chat-room h3 .user-wait').length).toEqual(1);
    expect(wrapped.find('.chat-room h3').find(FormattedMessage).length).toEqual(
      1
    );
  });

  it('show the correct message when is declined', () => {
    wrapped.setState({ declined: true });
    wrapped.update();
    expect(wrapped.find('.chat-room h3 .user-declined').length).toEqual(1);
    expect(wrapped.find('.chat-room h3').find(FormattedMessage).length).toEqual(
      1
    );
    expect(wrapped.find('.back-button').length).toEqual(1);
  });

  it('click Back to login button should call restartCha', () => {
    wrapped.setState({ declined: true });
    wrapped.update();
    wrapped.find('.back-button').simulate('click');
    expect(restartChatStub.callCount).toEqual(1);
  });
});
describe('ChatContainer and as no active chat and is a support', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { type: 'Support User' }
  };
  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
  });

  it('shows SideBar', () => {
    expect(wrapped.find(SideBar).length).toEqual(1);
  });

  it('show correctly items', () => {
    expect(wrapped.find('.chat-container').length).toEqual(1);
    expect(wrapped.find('.chat-room-container').length).toEqual(1);
    expect(wrapped.find('.chat-room').length).toEqual(1);
    expect(wrapped.find('.chat-room').length).toEqual(1);
    expect(wrapped.find('.chat-room h3 .support').length).toEqual(1);
    expect(wrapped.find('.chat-room h3').find(FormattedMessage).length).toEqual(
      1
    );
  });
});
describe('ChatContainer and active chat and is a support', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { type: 'Support User' }
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.setState({
      activeChat: { id: 'active-chat', name: 'activeChat' },
      chats: []
    });
  });

  it('show layout correctly', () => {
    expect(wrapped.find('.chat-container').length).toEqual(1);
    expect(wrapped.find('.chat-room-container').length).toEqual(1);
    expect(wrapped.find('.chat-room').length).toEqual(1);
  });

  it('shows SideBar', () => {
    expect(wrapped.find(SideBar).length).toEqual(1);
  });

  it('shows Messages', () => {
    expect(wrapped.find(Messages).length).toEqual(1);
  });

  it('shows Message Input', () => {
    expect(wrapped.find(MessageInput).length).toEqual(1);
  });
});
describe('setActiveChat', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { type: 'Support User' }
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.update();
  });

  it('should update the active chat in the state', () => {
    wrapped.instance().setActiveChat({ id: 'new-active-chat' });
    expect(wrapped.state('activeChat')).toEqual({ id: 'new-active-chat' });
  });
});
describe('addMessageToChat', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { type: 'Support User' }
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.setState({
      activeChat: { id: 'active-chat', name: 'activeChat' },
      chats: [{ id: 'active-chat', messages: [] }]
    });
    wrapped.update();
  });

  it('should update the active chat in the state when chat id exist', () => {
    wrapped.instance().addMessageToChat('active-chat')({
      message: 'message for test'
    });
    expect(wrapped.state('chats')[0].messages.length).toEqual(1);
  });

  it('shoult not update the active chat in the state when chat id not exist', () => {
    wrapped.instance().addMessageToChat('other-chat')({
      message: 'message for test'
    });
    expect(wrapped.state('chats')[0].messages.length).toEqual(0);
  });
});

describe('getUserChat', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { type: 'Support User' }
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.setState({
      activeChat: { id: 'active-chat', name: 'activeChat' },
      chats: [
        {
          id: 'active-chat',
          messages: [],
          users: [{ id: 'user-1' }, { id: 'user-2' }]
        },
        {
          id: 'other-chat',
          messages: [],
          users: [{ id: 'user-3' }, { id: 'user-2' }]
        }
      ]
    });
    wrapped.update();
  });

  it('should return all the chats for a user', () => {
    expect(wrapped.instance().getUserChat({ id: 'user-2' }).length).toEqual(2);
  });
});

describe('addChat', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { type: 'Support User' }
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.setState({
      chats: [
        {
          id: 'first-chat',
          messages: [],
          users: [{ id: 'user-1' }, { id: 'user-2' }]
        }
      ]
    });
    wrapped.update();
  });

  it('should return all the chats for a user', () => {
    let chat = { id: 'new-chat', messages: [], users: [] };
    let userList = {
      'user-1': { id: 'user-2', socketId: 'socket-id', type: 'Costumer User' },
      'user-2': { id: 'user-2', socketId: 'socket-id', type: 'Support User' }
    };
    wrapped.instance().addChat(chat, userList, 'user-2');
    expect(wrapped.state('chats').length).toEqual(2);
    expect(wrapped.state('activeChat')).toEqual(chat);
    expect(wrapped.state('activeUserId')).toEqual('user-2');
    expect(wrapped.state('users')).toEqual([
      { id: 'user-2', socketId: 'socket-id', type: 'Costumer User' },
      { id: 'user-2', socketId: 'socket-id', type: 'Support User' }
    ]);
  });
});
describe('removeChats', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { type: 'Support User' }
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.setState({
      chats: [
        {
          id: 'first-chat',
          messages: [],
          users: [{ id: 'user-1' }, { id: 'user-2' }]
        },
        {
          id: 'second-chat',
          messages: [],
          users: [{ id: 'user-1' }, { id: 'user-3' }]
        }
      ],
      activeChat: {
        id: 'first-chat',
        messages: [],
        users: [{ id: 'user-1' }, { id: 'user-2' }]
      }
    });
    wrapped.update();
  });

  it('should remove chat but not remove the active chat, when user is not in active chat', () => {
    wrapped.instance().removeChats({ id: 'user-3' });
    expect(wrapped.state('chats').length).toEqual(1);
    expect(wrapped.state('activeChat').id).toEqual('first-chat');
  });

  it('should remove chat and the active chat, when user is not in active chat', () => {
    wrapped.instance().removeChats({ id: 'user-1' });
    expect(wrapped.state('chats').length).toEqual(0);
    expect(wrapped.state('activeChat')).toEqual(null);
  });
});
describe('onDeclinedBySupport', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn },
    user: { id: 'user-to-be-decline', type: 'Costumer User' }
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.setState({
      chats: [],
      declined: false,
      activeChat: null,
      activeUserId: null,
      users: []
    });
    wrapped.update();
  });

  it('should decline user in session', () => {
    expect(wrapped.state('declined')).toEqual(false);
    wrapped.instance().onDeclinedBySupport('user-to-be-decline');
    expect(wrapped.state('declined')).toEqual(true);
  });
});
describe('onDeclineChatForUser', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn, emit: fn => fn },
    user: { id: 'support', type: 'Support User' }
  };

  let userDeclined: { id: 'user-to-be-decline' };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.setState({
      users: [userDeclined, { id: 'user-1' }, { id: 'user-2' }]
    });
    wrapped.update();
  });

  it('should remove decline user from user list', () => {
    expect(wrapped.state('users').length).toEqual(3);
    wrapped.instance().onDeclineChatForUser(userDeclined);
    expect(wrapped.state('users').length).toEqual(2);
  });
});
describe('startChat', () => {
  const props = {
    socket: { socketId: '1234', off: fn => fn, on: fn => fn, emit: fn => fn },
    user: { id: 'support', type: 'Support User' }
  };

  beforeEach(() => {
    wrapped = shallow(<ChatContainer {...props} />);
    wrapped.setState({
      users: [
        { id: 'user-1', accepted: false },
        { id: 'user-2', accepted: false },
        { id: 'user-4', accepted: false }
      ],
      activeChat: null,
      chats: [
        {
          id: 'first-chat',
          messages: [],
          users: [{ id: 'user-1' }, { id: 'user-2' }]
        }
      ]
    });
    wrapped.update();
  });

  it('should keep the list of user equal if the user is not in the user list and no active any chat', () => {
    wrapped.instance().startChat({ id: 'user-3' });
    expect(wrapped.state('users').length).toEqual(3);
    expect(wrapped.state('activeChat')).toEqual(null);
  });
  it('should update the list of user if the user is in the user list but no set active chat if the user as any chat', () => {
    wrapped.instance().startChat({ id: 'user-4' });
    expect(
      wrapped.state('users').find(u => u.id === 'user-4').accepted
    ).toEqual(true);
    expect(wrapped.state('activeChat')).toEqual(null);
  });
  it('should update the list of user if the user is in the user list and set the active chat', () => {
    wrapped.instance().startChat({ id: 'user-1' });
    expect(
      wrapped.state('users').find(u => u.id === 'user-1').accepted
    ).toEqual(true);
    expect(wrapped.state('activeChat').id).toEqual('first-chat');
  });
});

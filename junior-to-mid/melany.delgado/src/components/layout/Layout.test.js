import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
import LoginForm from '../loginForm/LoginForm';
import ChatContainer from '../chats/chatContainer/ChatContainer';

let wrapped;

describe('Layout when is a costumer user trying to login', () => {
  const props = {
    location: {
      pathname: '/support'
    }
  };

  beforeEach(() => {
    wrapped = shallow(<Layout {...props} />);
    wrapped.update();
  });

  it('should display login form', () => {
    expect(wrapped.find('.container').length).toEqual(1);
    expect(wrapped.find(LoginForm).length).toEqual(1);
  });
});
describe('Layout when is a costumer user already login', () => {
  const props = {
    location: {
      pathname: '/support'
    }
  };

  beforeEach(() => {
    wrapped = shallow(<Layout {...props} />);
    wrapped.setState({ user: { id: 'costumer-user' } });
    wrapped.update();
  });

  it('Display chat container', () => {
    expect(wrapped.find('.container').length).toEqual(1);
    expect(wrapped.find(ChatContainer).length).toEqual(1);
  });
});

describe('setUser function', () => {
  const props = {
    location: {
      pathname: '/support'
    }
  };

  beforeEach(() => {
    wrapped = shallow(<Layout {...props} />);
    wrapped.setState({ user: { id: 'costumer-user' } });
    wrapped.update();
  });

  it('Update user in state', () => {
    wrapped.instance().setUser({ id: 'newUser' });
    expect(wrapped.state('user')).toEqual({ id: 'newUser' });
  });
});

describe('logout function', () => {
  const props = {
    location: {
      pathname: '/support'
    }
  };

  beforeEach(() => {
    wrapped = shallow(<Layout {...props} />);
    wrapped.setState({ user: { id: 'costumer-user' } });
    wrapped.update();
  });

  it('Remove user from the state', () => {
    wrapped.instance().logout();
    expect(wrapped.state('user')).toEqual(null);
  });
});

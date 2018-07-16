import React from 'react';
import { mount } from 'enzyme';
import Messages from './Messages';

let wrapped;
const props = {
  messages: [
    {
      id: 'message-1',
      sender: { id: 'sender', name: 'sender-name' },
      time: 'time',
      message: 'hola'
    },
    {
      id: 'message-2',
      sender: { id: 'sender2', name: 'sender2-name' },
      time: 'time',
      message: 'hola sender 1'
    }
  ],
  user: { id: 'sender2' },
  typingUsers: []
};

const refs = {
  messages: [
    {
      id: 'message-1',
      sender: { id: 'sender', name: 'sender-name' },
      time: 'time',
      message: 'hola'
    },
    {
      id: 'message-2',
      sender: { id: 'sender2', name: 'sender2-name' },
      time: 'time',
      message: 'hola sender 1'
    }
  ],
  user: { id: 'sender2' },
  typingUsers: []
};

describe('Messages', () => {
  beforeEach(() => {
    wrapped = mount(<Messages {...props} />);
    wrapped.update();
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('Display layout correctly', () => {
    expect(wrapped.find('.thread-container').length).toEqual(1);
    expect(wrapped.find('.message-container').length).toEqual(2);
    expect(wrapped.find('.message-container .right').length).toEqual(1);
    expect(wrapped.find('.time').length).toEqual(2);
    expect(wrapped.find('.data').length).toEqual(2);
    expect(wrapped.find('.data .message').length).toEqual(2);
    expect(wrapped.find('.data .name').length).toEqual(2);
  });
});

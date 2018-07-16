import React from 'react';
import { shallow } from 'enzyme';
import ChatHeading from './ChatHeading';
import MdCancel from 'react-icons/lib/md/cancel';

let wrapped;

describe('ChatHeading', () => {
  beforeEach(() => {
    wrapped = shallow(<ChatHeading />);
  });

  it('Display layout correctly', () => {
    expect(wrapped.find('.chat-header').length).toEqual(1);
    expect(wrapped.find('.chat-info .chat-name').length).toEqual(1);
    expect(wrapped.find('.close').length).toEqual(1);
    expect(wrapped.find('.close').find(MdCancel).length).toEqual(1);
  });
});

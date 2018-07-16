import React from 'react';
import { shallow } from 'enzyme';
import MessageInput from './MessageInput';
import sinon from 'sinon';

let wrapped, handleSubmitStub;

describe('MessageInput', () => {
  const props = {
    handleSubmit: fn => fn
  };

  beforeEach(() => {
    wrapped = shallow(<MessageInput {...props} />);
    const component = wrapped.instance();
    handleSubmitStub = sinon
      .stub(component, 'handleSubmit')
      .callsFake(() => {});
    component.forceUpdate();
    wrapped.update();
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('should display layout', () => {
    expect(wrapped.find('.message-input').length).toEqual(1);
    expect(wrapped.find('form').length).toEqual(1);
    expect(wrapped.find('input').length).toEqual(1);
  });
  it('simulate input change', () => {
    wrapped.find('input').simulate('change', {
      target: { value: 'Input message' }
    });
    wrapped.update();
    expect(wrapped.find('input').prop('value')).toEqual('Input message');
  });

  it('submit form, should call handleSubmit function', () => {
    wrapped.find('form').simulate('submit');
    expect(handleSubmitStub.callCount).toEqual(1);
  });
});

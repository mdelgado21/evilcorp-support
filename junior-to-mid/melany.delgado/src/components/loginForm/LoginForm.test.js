import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';
import sinon from 'sinon';

let wrapper, handleSubmitStub;

const props = {
  handleSubmit: fn => fn
};
describe('Login', () => {
  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props} />);
  });

  it('Layout display correctly', () => {
    expect(wrapper.find('.login').length).toEqual(1);
    expect(wrapper.find('.login-form').length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('.title').length).toEqual(1);
    expect(wrapper.find('.fsociety-logo').length).toEqual(1);
    expect(wrapper.find('.login-btn').length).toEqual(1);
    expect(wrapper.find('.error').length).toEqual(1);
  });

  describe('input', () => {
    beforeEach(() => {
      const component = wrapper.instance();
      handleSubmitStub = sinon
        .stub(component, 'handleSubmit')
        .callsFake(() => {});
      component.forceUpdate();

      wrapper.find('input').simulate('change', {
        target: { value: 'User nickname' }
      });
      wrapper.update();
    });

    it('has a text area where users can type', () => {
      expect(wrapper.find('input').prop('value')).toEqual('User nickname');
    });

    it('submit form, should call handleSubmit function', () => {
      wrapper.find('form').simulate('submit');
      expect(handleSubmitStub.callCount).toEqual(1);
    });
  });
});

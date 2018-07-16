import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

let wrapped;

describe('Header', () => {
  beforeEach(() => {
    wrapped = shallow(<Home />);
  });

  it('Display layout correctly', () => {
    expect(wrapped.find('.home-container').length).toEqual(1);
    expect(wrapped.find('.home').length).toEqual(1);
    expect(wrapped.find('.title').length).toEqual(1);
    expect(wrapped.find('.fsociety-logo').length).toEqual(1);
    expect(wrapped.find('.support-options').length).toEqual(1);
  });
});

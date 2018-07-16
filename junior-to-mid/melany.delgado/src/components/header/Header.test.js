import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapped;

describe('Header', () => {
  beforeEach(() => {
    wrapped = shallow(<Header />);
  });

  it('Display layout correctly', () => {
    expect(wrapped.find('.page-header').length).toEqual(1);
    expect(wrapped.find('.logo').length).toEqual(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

let wrapper;

const props = {
  user: { id: 'id-test', name: 'Melany' },
  users: [{ id: 'id-1', name: 'User1' }, { id: 'id-2', name: 'User2' }]
};

describe('Sidebar', () => {
  beforeEach(() => {
    wrapper = shallow(<SideBar {...props} />);
    wrapper.update();
  });

  it('Layout display correctly', () => {
    expect(wrapper.find('#side-bar').length).toEqual(1);
    expect(wrapper.find('.heading').length).toEqual(1);
    expect(wrapper.find('.app-name').length).toEqual(1);
    expect(wrapper.find('.current-user').length).toEqual(1);
  });
});

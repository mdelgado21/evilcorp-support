import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../home/Home';
import Main from './Main';

jest.mock('react-intl');

describe('Main', () => {
  it('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <Main />
      </MemoryRouter>
    );
    expect(wrapper.find(Layout)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(0);
  });

  it('/ should be a valid path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Layout)).toHaveLength(0);
  });

  it('/support should be a valid path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/support']}>
        <Main />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Layout)).toHaveLength(1);
  });
});

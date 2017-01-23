import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Home from '../app/components/home/HomePage';

describe('Home page', () => {
  it('should show content', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h1').text()).toEqual('Holi-fun');
  });
});

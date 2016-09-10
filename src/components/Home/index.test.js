
import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Home from './';

ava('Test example', (test) => {
  const wrapper = shallow(<Home />);
  test.true(wrapper.is('section'));
});

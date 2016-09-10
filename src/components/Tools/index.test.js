
import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Tools from './';

ava('Test example', (test) => {
  const wrapper = shallow(<Tools />);
  test.true(wrapper.is('ul'));
});

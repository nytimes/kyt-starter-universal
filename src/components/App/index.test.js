
import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import App from './';

ava('Test example', (test) => {
  const wrapper = shallow(<App />);
  test.true(wrapper.is('div'));
});

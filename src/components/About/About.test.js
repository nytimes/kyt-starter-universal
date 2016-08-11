
import ava from 'ava';
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import About from './About';

ava('Test example', (test) => {
  const wrapper = shallow(<About />);
  test.pass(chai.assert.isTrue(wrapper.is('div')));
});

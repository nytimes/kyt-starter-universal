
import ava from 'ava';
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Home from './Home';

ava('Test example', (test) => {
  const wrapper = shallow(<Home />);
  test.pass(chai.assert.isTrue(wrapper.is('div')));
});

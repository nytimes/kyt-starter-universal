
import ava from 'ava';
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import App from './App';

ava('Test example', (test) => {
  const wrapper = shallow(<App />);
  test.pass(chai.assert.isTrue(wrapper.is('div')));
});

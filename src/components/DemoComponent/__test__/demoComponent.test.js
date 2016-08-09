// This testing environment uses:
// ava : https://github.com/avajs/ava
// chai: http://chaijs.com/
// enzyme: https://github.com/airbnb/enzyme

import ava from 'ava';
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import DemoComponent from '../DemoComponent';

ava('Tests that true is true.', (test) => {
  const wrapper = shallow(<DemoComponent />);
  test.pass(chai.assert.isTrue(wrapper.text() === 'Hello World'));
});

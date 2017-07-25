import React,{Component} from 'react';  
import {shallow} from 'enzyme';
import App from '../src/components/App';

test('App renders', () => {
  const app = shallow(
    <App />
  );

  expect(app.html()).toMatch('Aloha');

});

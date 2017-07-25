// Dependencies
import React from 'react';  
import ReactDOM from 'react-dom';

import {useStrict, transaction} from 'mobx';
import {observer, Provider, inject} from 'mobx-react';
import App from './components/App'
import socket from './sockets'

import stores from './stores'
//import {general} from './actions'
//import {login} from './utils/auth'
//import routes from './routing/routes'
//require('./styles/index.scss')

useStrict(true)



function renderApp(){
  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>
    , document.getElementById('main'));  
}
renderApp()

//setTimeout(()=> {
//  //general.changeStatus()
//  //login(23,23)
//}, 4000)


if(module.hot){
  module.hot.accept(App, renderApp)
}

import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

@inject('ui') @observer 
class App extends Component {
  render() {
    console.log("this.props", this.props)

    return (
      <div className="App">
        Aloha there!
        <br/>
        <em>{this.props.ui.mainName}</em>
      </div>
    );
  }
}

export default App;

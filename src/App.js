import React, { Component } from 'react';
import NavigationHeader from './components/common/NavigationHeader'
import {createStore} from "redux";
import './App.css';

const store = createStore();

class App extends Component {
  render() {
    return (
        <div>
          <NavigationHeader/>
        </div>
    );
  }
}

export default App;

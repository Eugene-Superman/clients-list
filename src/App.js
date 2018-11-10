import React, { Component } from 'react';
import store from './store/index';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import MainBlock from './components/MainBlock';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Sidebar />
          <MainBlock />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import store from './store/index';
import { Provider } from 'react-redux';

import Sidebar from './containers/Sidebar';
import MainBlock from './containers/MainBlock';

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

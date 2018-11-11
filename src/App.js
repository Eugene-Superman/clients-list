import React, { Component } from 'react';
import store from './store/index';
import { Provider } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react'

import Sidebar from './containers/Sidebar';
import MainBlock from './containers/MainBlock';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Grid>
            <Grid.Column width={6}>
              <Sidebar />
            </Grid.Column>
            <Grid.Column width={10}>
              <MainBlock />
            </Grid.Column>
          </Grid>
        </Container>
      </Provider>
    );
  }
}

export default App;

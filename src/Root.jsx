import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router-dom/Router';
import store, { history } from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withStyles from 'material-ui/styles/withStyles';
import createMuiTheme from 'material-ui/styles/createMuiTheme';

import 'typeface-roboto';

import App from './frame/AppFrame';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  overrides: {}
});

const styles = {
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Roboto',
      background: '#212121',
      color: '#fff',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    'textarea, input, button, select': {
      outline: 'none !important'
    }
  }
};

const Root = props => (
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default withStyles(styles)(Root);

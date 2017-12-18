import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router-dom/Router';
import store, { history } from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import 'typeface-roboto';

import Routes from './routes/Routes';

import './Root.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  overrides: {}
});

const Root = props => (
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default Root;

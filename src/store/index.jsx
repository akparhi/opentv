import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from '../middlewares/api';
import createHistory from 'history/createBrowserHistory';
import reducer from '../reducers';

export const history = createHistory();

const initialState = {};
const middleware = [thunk, api];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(reducer, initialState, composedEnhancers);

export default store;

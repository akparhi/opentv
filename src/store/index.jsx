import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { nprogressMiddleware } from 'redux-nprogress';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import reducer from 'reducers';

export const history = createHistory();

const initialState = {};
const middleware = [thunk, nprogressMiddleware(), routerMiddleware(history)];
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

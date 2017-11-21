import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { RESET_STORE } from 'constants';

//reducers

const appReducer = combineReducers({
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

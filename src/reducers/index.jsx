import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { RESET_STORE } from 'constants';

//reducers
// Updates an entity cache in response to any action with response.entities.
const entities = (state = {}, action) => {
  if (action.response && action.response.entities)
    return { ...state, ...action.response.entities };

  return state;
};

const appReducer = combineReducers({
  routing: routerReducer,
  entities
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

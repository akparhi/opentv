import { combineReducers } from 'redux';

import * as ActionTypes from '../constants';

//reducers
// Updates an entity cache in response to any action with response.entities.
const entities = (
  state = {
    tvShows: {}
  },
  action
) => {
  if (action.response && action.response.entities)
    return { ...state, ...action.response.entities };

  return state;
};

const tvShows = (state = [], action) => {
  if (action.type === ActionTypes.SEARCH_TV_SUCCESS)
    return [...action.response.result.results];

  return state;
};

const rootReducer = combineReducers({
  entities,
  tvShows
});

export default rootReducer;

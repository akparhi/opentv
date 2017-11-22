import {
  SEARCH_TV_REQUEST,
  SEARCH_TV_SUCCESS,
  SEARCH_TV_FAILURE
} from '../constants';
import { CALL_API } from '../middlewares/api';
import Schemas from '../schemas';

// Actions
// search a tv show
const fetchTVSearch = query => ({
  [CALL_API]: {
    types: [SEARCH_TV_REQUEST, SEARCH_TV_SUCCESS, SEARCH_TV_FAILURE],
    endpoint: `/search/tv/?api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }&query=${query}`,
    schema: Schemas.TV_SHOWS_SEARCH
  }
});

export const searchTV = query => dispatch => {
  if (!query) return null;

  return dispatch(fetchTVSearch(query));
};

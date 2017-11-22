import { CALL_API } from '../middlewares/api';
import Schemas from '../schemas';

// Actions
// search a tv show
export const SEARCH_TV_REQUEST = 'SEARCH_TV_REQUEST';
export const SEARCH_TV_SUCCESS = 'SEARCH_TV_SUCCESS';
export const SEARCH_TV_FAILURE = 'SEARCH_TV_FAILURE';

const fetchTVSearch = query => ({
  [CALL_API]: {
    types: [SEARCH_TV_REQUEST, SEARCH_TV_SUCCESS, SEARCH_TV_FAILURE],
    endpoint: `/search/tv/?${process.env.REACT_APP_TMDB_API_KEY}&query=${
      query
    }`,
    schema: Schemas.TV_SHOWS_SEARCH
  }
});

export const searchTV = (query = '') => (dispatch, getState) => {
  if (!query) return null;

  return dispatch(fetchTVSearch(query));
};

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/paularmstrong/normalizr

import { schema } from 'normalizr';

const person = new schema.Entity('persons');
const genre = new schema.Entity('genres');
const network = new schema.Entity('networks');
const company = new schema.Entity('companies');
const season = new schema.Entity('seasons');
const tvShowSchema = {
  genre_ids: [genre],
  created_by: [person],
  genres: [genre],
  networks: [network],
  production_companies: [company],
  seasons: [season]
};

const tvShow = new schema.Entity('tvShows');

const tvShowsSchema = { results: [tvShow] };

// Schemas for API responses.
const Schemas = {
  TV_SHOW: tvShowSchema,
  TV_SHOWS_SEARCH: tvShowsSchema
};

export default Schemas;

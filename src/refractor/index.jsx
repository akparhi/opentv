import { CALL_API } from '../middlewares/api';

class Model {
  constructor(name, endpoint, schema) {
    this.name = name;
    this.endpoint = endpoint;
    this.schema = schema;
  }
  requestNew = payload => ({
    [CALL_API]: {
      types: [
        `${this.name}_NEW_REQUEST`,
        `${this.name}_NEW_SUCCESS`,
        `${this.name}_NEW_FAILURE`
      ],
      endpoint: this.endpoint,
      schema: this.schema,
      method: 'POST',
      payload
    },
    ...payload
  });
  addEntityAction = entityForm => dispatch =>
    dispatch(this.requestNew(entityForm));
  requestEdit = (id, payload) => ({
    [CALL_API]: {
      types: [
        `${this.name}_EDIT_REQUEST`,
        `${this.name}_EDIT_SUCCESS`,
        `${this.name}_EDIT_FAILURE`
      ],
      endpoint: `${this.endpoint}/${id}`,
      schema: this.schema,
      method: 'POST',
      payload
    },
    ...payload
  });

  requestDelete = id => ({
    [CALL_API]: {
      types: [
        `${this.name}_DELETE_REQUEST`,
        `${this.name}_DELETE_SUCCESS`,
        `${this.name}_DELETE_FAILURE`
      ],
      endpoint: `${this.endpoint}/${id}/delete`,
      schema: this.schema,
      method: 'POST'
    }
  });

  getAction = ({ action, ...payload }) => dispatch => {
    switch (action) {
      case 'GET_ONE':
        return null;
      case 'GET_ALL':
        return null;
      case 'ADD':
        return dispatch(this.requestNew(payload));
      case 'UPDATE':
        return dispatch(this.requestEdit(payload.id, payload));
      case 'DELETE':
        return dispatch(this.requestDelete(payload.id));
      default:
        return null;
    }
  };
}

export default Model;

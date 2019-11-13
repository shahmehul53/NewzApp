import {LOAD_DATA_START} from '../actions/Types';
import {LOAD_DATA_SUCCESS} from '../actions/Types';
import {LOAD_DATA_FAIL} from '../actions/Types';

let initialState = {
  datastore: [],
  isLoading: false,
  error: null,
};

export default data1 = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_START:
      return {...state, isLoading: true};
    case LOAD_DATA_SUCCESS:
      return {...state, datastore: action.payload, isLoading: false};
    case LOAD_DATA_FAIL:
      return {...state, error: action.payload, isLoading: false};
    default:
      return state;
  }
};

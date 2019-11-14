import {LOAD_DATA_START_CAT} from '../actions/Types';
import {LOAD_DATA_SUCCESS_CAT} from '../actions/Types';
import {LOAD_DATA_FAIL_CAT} from '../actions/Types';

let initialState = {
  datastore: [],
  isLoading: false,
  error: null,
  technology: [],
  science: [],
  health: [],
  sports: [],
  entertainment: [],
  business: [],
  general: [],
};

export default categories = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_START_CAT:
      return {...state, isLoading: true};
    case LOAD_DATA_SUCCESS_CAT:
      console.log(action.q);
      // if (action.q == 'technology') {
      //   return {...state, isLoading: false, technology: action.payload};
      // } else if (action.q == 'sports') {
      //   return {...state, isLoading: false, sports: action.payload};
      // } else {
      //   return {...state, isLoading: false, datastore: action.payload};
      // }
      return {...state, isLoading: false, [action.q]: action.payload};
    case LOAD_DATA_FAIL_CAT:
      return {...state, error: action.payload, isLoading: false};
    default:
      return state;
  }
};

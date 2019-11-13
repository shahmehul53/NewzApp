import {LOAD_DATA_START} from '../actions/Types';
import {LOAD_DATA_SUCCESS} from '../actions/Types';
import {LOAD_DATA_FAIL} from '../actions/Types';

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
    case 'LOAD_DATA_START_cat':
      return {...state, isLoading: true};
    case 'LOAD_DATA_SUCCESS_cat':
      console.log(action.q);
      // if (action.q == 'technology') {
      //   return {...state, isLoading: false, technology: action.payload};
      // } else if (action.q == 'sports') {
      //   return {...state, isLoading: false, sports: action.payload};
      // } else {
      //   return {...state, isLoading: false, datastore: action.payload};
      // }
      return {...state, isLoading: false, [action.q]: action.payload};
    case 'LOAD_DATA_FAIL_cat':
      return {...state, error: action.payload, isLoading: false};
    default:
      return state;
  }
};

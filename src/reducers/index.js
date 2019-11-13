import {combineReducers} from 'redux';

import dataReducer from './dataReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  data2: dataReducer,
  category: categoryReducer,
});

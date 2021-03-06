import {combineReducers} from 'redux';

import dataReducer from './dataReducer';
import categoryReducer from './categoryReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  data2: dataReducer,
  category: categoryReducer,
  theme1: themeReducer,
});

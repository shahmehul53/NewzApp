import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   blacklist: ['data2', 'category'],
  //   whitelist: ['theme1'],
};

const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export {store, persistor};
//export default store;

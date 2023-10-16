
import { combineReducers } from 'redux';
import commonReducer from './commomReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['colorrdata']
};

const rootReducers = combineReducers({
  commonReducer: persistReducer(persistConfig, commonReducer)
});

export default rootReducers;
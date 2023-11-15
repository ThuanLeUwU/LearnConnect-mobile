
import { combineReducers } from 'redux';
import commonReducer from './commomReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './authReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['colorrdata']
};
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userLogin','token']
};

const rootReducers = combineReducers({
  commonReducer: persistReducer(persistConfig, commonReducer),
  authReducer: persistReducer(authPersistConfig, authReducer),
});

export default rootReducers;
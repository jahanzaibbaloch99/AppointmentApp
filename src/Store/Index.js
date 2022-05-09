import {combineReducers, legacy_createStore as createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// Import your reducers here
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import your reducers here
import AccountReducer from './Reducers/Account';
import AppReducer from './Reducers/App';
// Persist Reducer is we connect Our Redux data with Local Storage Which is ASYNC STORAGE We are Using for Local Storage Purpose,


const AccountReducerPersistanceConfig = {
  key: 'AccountReducer',
  storage: AsyncStorage,
  whitelist: ['user'], // we use Whitelist key to Configure the Reducer and tell that it is the data which need to be Saved in Async storage

};

const AppReducerPersistanceConfig = {
  key: 'AppReducer', // key which we want it to be named when we get the data in our Screen and components
  storage: AsyncStorage, // in which storage we want to save the data which is asyncStorage
  whitelist: ['appointments'], // we use Whitelist key to Configure the Reducer and tell that it is the data which need to be Saved in Async storage

};

// Add them into combined reducers list
const combinedReducers = combineReducers({
  AccountReducer: persistReducer(
    AccountReducerPersistanceConfig,
    AccountReducer,
  ),
  AppReducer: persistReducer(AppReducerPersistanceConfig, AppReducer),
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export const store = createStore(rootReducer);

export const persistor = persistStore(store);

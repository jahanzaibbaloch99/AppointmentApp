import { combineReducers, legacy_createStore as createStore, } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// Import your reducers here
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import your reducers here
import AccountReducer from './Reducers/Account';
// import AppReducer from "./Reducers/App"
const AccountReducerPersistanceConfig = {
    key: 'AccountReducer',
    storage: AsyncStorage,
    whitelist: ['user'],
};

const AppReducerPersistanceConfig = {
    key: 'AppReducer',
    storage: AsyncStorage,
    whitelist: ['bookmarks'],
};

// Add them into combined reducers list
const combinedReducers = combineReducers({
    AccountReducer: persistReducer(AccountReducerPersistanceConfig, AccountReducer),
    // AppReducer: persistReducer(AppReducerPersistanceConfig, AppReducer),
});

const rootReducer = (state, action) => {
    return combinedReducers(state, action);
};

export const store = createStore(rootReducer);

export const persistor = persistStore(store);

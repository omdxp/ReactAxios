import {createStore, combineReducers} from 'redux';
import addItemsReducer from '../reducers/add-items-reducer';
import {persistStore, persistReducer} from 'redux-persist';
import FileSystemStorage from 'redux-persist-filesystem-storage';

const appReducers = combineReducers({addItemsReducer});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage: FileSystemStorage,
  whitelist: ['addItemsReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);

// store.js
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'root',
  storage,
  // Specify the reducers you want to persist
 
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
   
  })
  export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store);
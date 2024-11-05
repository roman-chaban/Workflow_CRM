import { configureStore } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './rootReducer/rootReducer';

const mockStorage = {
  setItem: async () => {},
  getItem: async () => null,
  removeItem: async () => {},
};

const persistConfig = {
  key: 'root',
  storage: typeof window !== 'undefined' ? AsyncStorage : mockStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;

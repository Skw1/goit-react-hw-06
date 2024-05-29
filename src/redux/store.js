import { combineSlices, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineSlices({
  filter: filterReducer,
  numbers: contactsReducer,
});

const persistedTAskReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedTAskReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";
import rootReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "userPreferences", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
